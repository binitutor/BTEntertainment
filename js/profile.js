// Profile Page Script

document.addEventListener('DOMContentLoaded', () => {
    initializeProfile();
    setupFormHandlers();
    displayWatchHistory();
    displayRatings();
    displayWatchlist();
});

function initializeProfile() {
    const userData = userDataManager.getUserData();

    // Update preferences form
    const preferences = userData.preferences;
    
    // Set favorite genres checkboxes
    preferences.favoriteGenres.forEach(genre => {
        const element = document.getElementById(`genre${genre.charAt(0).toUpperCase() + genre.slice(1)}`);
        if (element) element.checked = true;
    });

    // Set text inputs
    document.getElementById('favoriteDirectors').value = preferences.favoriteDirectors.join(', ');
    document.getElementById('favoriteActors').value = preferences.favoriteActors.join(', ');
    document.getElementById('contentRating').value = preferences.contentRating;

    // Set notification preferences
    document.getElementById('newReleases').checked = preferences.notifications.newReleases;
    document.getElementById('recommendations').checked = preferences.notifications.recommendations;
}

function setupFormHandlers() {
    document.getElementById('preferencesForm').addEventListener('submit', (e) => {
        e.preventDefault();
        savePreferences();
    });
}

function savePreferences() {
    // Get favorite genres
    const favoriteGenres = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(el => el.value);

    const preferences = {
        favoriteGenres: favoriteGenres,
        favoriteDirectors: document.getElementById('favoriteDirectors').value
            .split(',')
            .map(d => d.trim())
            .filter(d => d),
        favoriteActors: document.getElementById('favoriteActors').value
            .split(',')
            .map(a => a.trim())
            .filter(a => a),
        contentRating: document.getElementById('contentRating').value,
        notifications: {
            newReleases: document.getElementById('newReleases').checked,
            recommendations: document.getElementById('recommendations').checked
        }
    };

    userDataManager.updatePreferences(preferences);
    showAlert('Preferences saved successfully!', 'success');
}

function displayWatchHistory() {
    const userData = userDataManager.getUserData();
    const tbody = document.getElementById('watchHistoryBody');

    if (userData.watchHistory.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">No watch history yet</td>
            </tr>
        `;
        return;
    }

    const html = userData.watchHistory.map((item, index) => {
        const movie = getMovieById(item.movieId);
        if (!movie) return '';

        return `
            <tr>
                <td>${movie.title}</td>
                <td>${item.watchedDate}</td>
                <td>${item.duration}</td>
                <td>
                    <div class="progress" style="height: 20px;">
                        <div class="progress-bar bg-danger" role="progressbar" 
                             style="width: ${item.progress}%" aria-valuenow="${item.progress}">
                            ${item.progress}%
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeFromWatchHistory(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = html;

    // Initialize DataTable if available
    if ($.fn.DataTable) {
        if ($.fn.DataTable.isDataTable('#watchHistoryTable')) {
            $('#watchHistoryTable').DataTable().destroy();
        }
        $('#watchHistoryTable').DataTable({
            "paging": true,
            "pageLength": 10,
            "language": {
                "emptyTable": "No data available",
                "lengthMenu": "Show _MENU_ entries",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty": "Showing 0 to 0 of 0 entries"
            }
        });
    }
}

function displayRatings() {
    const userData = userDataManager.getUserData();
    const tbody = document.getElementById('ratingsBody');

    if (userData.ratings.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">No ratings yet. Start rating movies!</td>
            </tr>
        `;
        return;
    }

    const html = userData.ratings.map((rating, index) => {
        const movie = getMovieById(rating.movieId);
        if (!movie) return '';

        return `
            <tr>
                <td>${movie.title}</td>
                <td>${generateStars(rating.rating)} <span class="ms-2">${rating.rating}/10</span></td>
                <td>${rating.date}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeRating(${rating.movieId})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = html;

    // Initialize DataTable if available
    if ($.fn.DataTable) {
        if ($.fn.DataTable.isDataTable('#ratingsTable')) {
            $('#ratingsTable').DataTable().destroy();
        }
        $('#ratingsTable').DataTable({
            "paging": true,
            "pageLength": 10,
            "language": {
                "emptyTable": "No data available",
                "lengthMenu": "Show _MENU_ entries",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty": "Showing 0 to 0 of 0 entries"
            }
        });
    }
}

function displayWatchlist() {
    const userData = userDataManager.getUserData();
    const container = document.getElementById('watchlistContainer');

    if (userData.watchlist.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-bookmark text-muted" style="font-size: 4rem;"></i>
                <h3 class="text-muted mt-3">Watchlist is empty</h3>
                <p class="text-muted mb-4">Add movies to your watchlist from the discover page</p>
                <a href="movies.html" class="btn btn-danger">
                    <i class="fas fa-search me-2"></i> Discover Movies
                </a>
            </div>
        `;
        return;
    }

    const watchlistMovies = userData.watchlist
        .map(movieId => getMovieById(movieId))
        .filter(movie => movie !== undefined);

    const html = watchlistMovies.map(movie => createMovieCard(movie)).join('');
    container.innerHTML = html;
}

function removeFromWatchHistory(index) {
    showConfirm(
        'Remove from History',
        'Are you sure you want to remove this item from your watch history?',
        () => {
            const userData = userDataManager.getUserData();
            userData.watchHistory.splice(index, 1);
            localStorage.setItem('userData', JSON.stringify(userData));
            displayWatchHistory();
            showAlert('Removed from history', 'success');
        }
    );
}

function removeRating(movieId) {
    showConfirm(
        'Remove Rating',
        'Are you sure you want to remove this rating?',
        () => {
            const userData = userDataManager.getUserData();
            userData.ratings = userData.ratings.filter(r => r.movieId !== movieId);
            localStorage.setItem('userData', JSON.stringify(userData));
            displayRatings();
            showAlert('Rating removed', 'success');
        }
    );
}
