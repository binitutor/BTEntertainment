// Recommendations Page Script

document.addEventListener('DOMContentLoaded', () => {
    initializeRecommendations();
    setupRecommendationFilters();
});

function initializeRecommendations() {
    displayRecommendations('all');
}

function setupRecommendationFilters() {
    const radioButtons = document.querySelectorAll('input[name="recommendationType"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            displayRecommendations(e.target.value);
        });
    });
}

function displayRecommendations(type) {
    const userData = userDataManager.getUserData();
    const container = document.getElementById('recommendationSections');
    let recommendations = [];

    if (userData.ratings.length === 0 && userData.preferences.favoriteGenres.length === 0) {
        document.getElementById('emptyState').style.display = 'block';
        container.innerHTML = '';
        return;
    }

    document.getElementById('emptyState').style.display = 'none';

    switch(type) {
        case 'genre':
            recommendations = getGenreBasedRecommendations();
            break;
        case 'actor':
            recommendations = getActorBasedRecommendations();
            break;
        case 'director':
            recommendations = getDirectorBasedRecommendations();
            break;
        default:
            recommendations = getAllRecommendations();
    }

    if (recommendations.length === 0) {
        container.innerHTML = `
            <div class="alert alert-info text-center py-5" role="alert">
                <i class="fas fa-info-circle me-2"></i>
                No recommendations available for this filter. Try adjusting your preferences!
            </div>
        `;
        return;
    }

    const sections = groupRecommendationsByGenre(recommendations);
    let html = '';

    Object.entries(sections).forEach(([genre, movies]) => {
        html += `
            <div class="mb-5 animate-slide-left">
                <h4 class="text-white fw-bold mb-4">
                    <i class="fas fa-star text-danger me-2"></i>${genre}
                </h4>
                <div class="row g-4">
                    ${movies.map(movie => createMovieCard(movie)).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function getAllRecommendations() {
    const userData = userDataManager.getUserData();
    
    // Combine ratings and preferences to get all recommendations
    let recommended = [];
    
    // Get movies from favorite genres
    const favoriteGenreMovies = moviesDatabase.filter(movie => 
        movie.genre.some(genre => userData.preferences.favoriteGenres.includes(genre))
    );
    
    // Get movies by favorite directors
    const favoriteDirectorMovies = moviesDatabase.filter(movie =>
        userData.preferences.favoriteDirectors.some(director => 
            movie.director.toLowerCase().includes(director.toLowerCase())
        )
    );
    
    // Get movies with favorite actors
    const favoriteActorMovies = moviesDatabase.filter(movie =>
        userData.preferences.favoriteActors.some(actor =>
            movie.cast.some(cast => cast.toLowerCase().includes(actor.toLowerCase()))
        )
    );
    
    // Combine and remove duplicates
    const allRecommended = [...new Set([
        ...favoriteGenreMovies,
        ...favoriteDirectorMovies,
        ...favoriteActorMovies
    ])];
    
    // If no specific preferences, show top-rated movies
    if (allRecommended.length === 0) {
        return moviesDatabase.sort((a, b) => b.rating - a.rating).slice(0, 12);
    }
    
    return allRecommended.sort((a, b) => b.rating - a.rating);
}

function getGenreBasedRecommendations() {
    const userData = userDataManager.getUserData();
    
    return moviesDatabase.filter(movie =>
        movie.genre.some(genre => userData.preferences.favoriteGenres.includes(genre))
    ).sort((a, b) => b.rating - a.rating);
}

function getActorBasedRecommendations() {
    const userData = userDataManager.getUserData();
    
    return moviesDatabase.filter(movie =>
        userData.preferences.favoriteActors.some(actor =>
            movie.cast.some(cast => cast.toLowerCase().includes(actor.toLowerCase()))
        )
    ).sort((a, b) => b.rating - a.rating);
}

function getDirectorBasedRecommendations() {
    const userData = userDataManager.getUserData();
    
    return moviesDatabase.filter(movie =>
        userData.preferences.favoriteDirectors.some(director =>
            movie.director.toLowerCase().includes(director.toLowerCase())
        )
    ).sort((a, b) => b.rating - a.rating);
}

function groupRecommendationsByGenre(movies) {
    const grouped = {};
    
    movies.forEach(movie => {
        movie.genre.forEach(genre => {
            const capitalizedGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
            if (!grouped[capitalizedGenre]) {
                grouped[capitalizedGenre] = [];
            }
            if (!grouped[capitalizedGenre].find(m => m.id === movie.id)) {
                grouped[capitalizedGenre].push(movie);
            }
        });
    });
    
    return grouped;
}
