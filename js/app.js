// Utility Functions
function navigateTo(page) {
    window.location.href = page;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i> ';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i> ';
    }
    
    const emptyStars = 10 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-muted"></i> ';
    }
    
    return stars;
}

function getMovieById(id) {
    return moviesDatabase.find(movie => movie.id === id);
}

function createMovieCard(movie) {
    const rating = userDataManager.getRating(movie.id);
    const isInWatchlist = userDataManager.getUserData().watchlist.includes(movie.id);
    
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="movie-card animate-up">
                <div class="movie-poster">
                    <img src="${movie.poster}" alt="${movie.title}">
                </div>
                <div class="movie-info">
                    <h6 class="movie-title" title="${movie.title}">${movie.title}</h6>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-rating">${movie.rating}/10</span>
                    </div>
                    <div class="movie-actions">
                        <button class="btn btn-sm btn-danger" onclick="showMovieDetail(${movie.id})">
                            <i class="fas fa-info-circle"></i>
                        </button>
                        <button class="btn btn-sm btn-${isInWatchlist ? 'danger' : 'outline-danger'}" 
                                onclick="toggleWatchlist(${movie.id})" title="${isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showMovieDetail(movieId) {
    const movie = getMovieById(movieId);
    if (!movie) return;

    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('moviePoster').src = movie.poster;
    document.getElementById('movieDirector').textContent = movie.director;
    document.getElementById('movieCast').textContent = movie.cast.join(', ');
    document.getElementById('movieGenres').textContent = movie.genre.map(g => 
        g.charAt(0).toUpperCase() + g.slice(1)
    ).join(', ');
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieRating').innerHTML = generateStars(movie.rating) + ` <span class="ms-2">${movie.rating}/10</span>`;
    document.getElementById('moviePlot').textContent = movie.plot;

    const rating = userDataManager.getRating(movieId);
    if (rating) {
        document.getElementById('rateMovieBtn').textContent = `<i class="fas fa-star me-2"></i> Update Rating (${rating}/10)`;
    } else {
        document.getElementById('rateMovieBtn').textContent = `<i class="fas fa-star me-2"></i> Rate This Movie`;
    }

    currentMovieId = movieId;
    const modal = new bootstrap.Modal(document.getElementById('movieDetailModal'));
    modal.show();
}

let currentMovieId = null;
let currentRating = 0;

function openRatingModal() {
    currentRating = 0;
    const ratingStarsDiv = document.getElementById('ratingStars');
    ratingStarsDiv.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const star = document.createElement('button');
        star.type = 'button';
        star.className = 'btn btn-sm star';
        star.innerHTML = '<i class="fas fa-star"></i>';
        star.onclick = (e) => {
            e.preventDefault();
            currentRating = i;
            updateStars();
        };
        ratingStarsDiv.appendChild(star);
    }

    // Load existing rating if any
    const existingRating = userDataManager.getRating(currentMovieId);
    if (existingRating) {
        currentRating = existingRating;
        updateStars();
    }

    const modal = new bootstrap.Modal(document.getElementById('ratingModal'));
    modal.show();
}

function updateStars() {
    document.querySelectorAll('.star').forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitRating() {
    if (currentRating === 0) {
        showAlert('Please select a rating', 'warning');
        return;
    }

    userDataManager.addRating(currentMovieId, currentRating);
    
    bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('movieDetailModal')).hide();
    
    showAlert(`Movie rated ${currentRating}/10!`, 'success');
}

function addToWatchlist() {
    userDataManager.addToWatchlist(currentMovieId);
    bootstrap.Modal.getInstance(document.getElementById('movieDetailModal')).hide();
    showAlert('Added to Watchlist!', 'success');
}

function toggleWatchlist(movieId) {
    const userData = userDataManager.getUserData();
    if (userData.watchlist.includes(movieId)) {
        userDataManager.removeFromWatchlist(movieId);
        showAlert('Removed from Watchlist', 'info');
    } else {
        userDataManager.addToWatchlist(movieId);
        showAlert('Added to Watchlist!', 'success');
    }
    
    // Refresh the current page if needed
    if (window.location.pathname.includes('movies.html')) {
        location.reload();
    }
}

// Alert Function
function showAlert(message, type = 'info') {
    const iconMap = {
        'success': 'fas fa-check-circle',
        'error': 'fas fa-times-circle',
        'warning': 'fas fa-exclamation-circle',
        'info': 'fas fa-info-circle'
    };

    Swal.fire({
        title: message,
        icon: type,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            popup: 'bg-dark text-white',
            timerProgressBar: 'bg-danger'
        }
    });
}

// Confirm Dialog
function showConfirm(title, message, onConfirm) {
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e50914',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes',
        customClass: {
            popup: 'bg-dark text-white'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
}

// Chart Configuration
function getChartDefaults() {
    return {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: '#808080'
                },
                grid: {
                    color: '#3a3a3a',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '#808080'
                },
                grid: {
                    color: '#3a3a3a',
                    drawBorder: false
                }
            }
        }
    };
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
