// Movies Page Script

let filteredMovies = [...moviesDatabase];

document.addEventListener('DOMContentLoaded', () => {
    initializeMoviesPage();
    setupEventListeners();
});

function initializeMoviesPage() {
    displayMovies(moviesDatabase);
    updateFilterValues();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterMovies);
    document.getElementById('genreFilter').addEventListener('change', filterMovies);
    document.getElementById('yearFilter').addEventListener('input', (e) => {
        document.getElementById('yearValue').textContent = e.target.value;
        filterMovies();
    });
    document.getElementById('ratingFilter').addEventListener('input', (e) => {
        document.getElementById('ratingValue').textContent = e.target.value;
        filterMovies();
    });
}

function updateFilterValues() {
    document.getElementById('yearValue').textContent = document.getElementById('yearFilter').value;
    document.getElementById('ratingValue').textContent = document.getElementById('ratingFilter').value;
}

function applyFilters() {
    filterMovies();
    showAlert('Filters applied!', 'success');
}

function filterMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreFilter').value;
    const minYear = parseInt(document.getElementById('yearFilter').value);
    const minRating = parseFloat(document.getElementById('ratingFilter').value);

    filteredMovies = moviesDatabase.filter(movie => {
        const matchesSearch = 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.director.toLowerCase().includes(searchTerm) ||
            movie.cast.some(actor => actor.toLowerCase().includes(searchTerm));

        const matchesGenre = !selectedGenre || movie.genre.includes(selectedGenre);
        const matchesYear = movie.year >= minYear;
        const matchesRating = movie.rating >= minRating;

        return matchesSearch && matchesGenre && matchesYear && matchesRating;
    });

    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    const container = document.getElementById('moviesContainer');

    if (movies.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search text-muted" style="font-size: 4rem;"></i>
                <h3 class="text-muted mt-3">No movies found</h3>
                <p class="text-muted">Try adjusting your search filters</p>
            </div>
        `;
        return;
    }

    const html = movies.map(movie => createMovieCard(movie)).join('');
    container.innerHTML = html;

    // Add stagger animation
    document.querySelectorAll('.animate-up').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.05}s`;
    });
}
