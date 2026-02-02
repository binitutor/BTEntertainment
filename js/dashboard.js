// Dashboard Page Script

document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
});

function initializeDashboard() {
    displayStats();
    initializeCharts();
    displayRecentlyWatched();
    displayRecommendations();
}

function displayStats() {
    const stats = userDataManager.getStats();
    document.getElementById('movieCount').textContent = '1,250+';
    document.getElementById('userRating').textContent = '4.8/5';
    document.getElementById('userCount').textContent = '50K+';
}

function initializeCharts() {
    // Genre Chart
    const genreCtx = document.getElementById('genreChart');
    if (genreCtx) {
        const genreData = getGenreData();
        new Chart(genreCtx, {
            type: 'doughnut',
            data: {
                labels: genreData.labels,
                datasets: [{
                    data: genreData.data,
                    backgroundColor: [
                        '#e50914',
                        '#ff6b35',
                        '#00a8e8',
                        '#00c9a7',
                        '#ffc200',
                        '#7c3aed'
                    ],
                    borderColor: '#1a1a1a',
                    borderWidth: 2
                }]
            },
            options: {
                ...getChartDefaults(),
                plugins: {
                    ...getChartDefaults().plugins,
                    legend: {
                        ...getChartDefaults().plugins.legend,
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Rating Chart
    const ratingCtx = document.getElementById('ratingChart');
    if (ratingCtx) {
        const ratingData = getRatingDistribution();
        new Chart(ratingCtx, {
            type: 'bar',
            data: {
                labels: ['1-2', '3-4', '5-6', '7-8', '9-10'],
                datasets: [{
                    label: 'Number of Ratings',
                    data: ratingData,
                    backgroundColor: '#e50914',
                    borderColor: '#ff6b35',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                ...getChartDefaults(),
                indexAxis: undefined,
                scales: {
                    ...getChartDefaults().scales,
                    y: {
                        ...getChartDefaults().scales.y,
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function getGenreData() {
    const userData = userDataManager.getUserData();
    const genreCounts = {};

    moviesDatabase.forEach(movie => {
        movie.genre.forEach(genre => {
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
    });

    return {
        labels: Object.keys(genreCounts),
        data: Object.values(genreCounts)
    };
}

function getRatingDistribution() {
    const userData = userDataManager.getUserData();
    const ranges = [0, 0, 0, 0, 0];

    userData.ratings.forEach(rating => {
        const rate = rating.rating;
        if (rate <= 2) ranges[0]++;
        else if (rate <= 4) ranges[1]++;
        else if (rate <= 6) ranges[2]++;
        else if (rate <= 8) ranges[3]++;
        else ranges[4]++;
    });

    return ranges.length > 0 ? ranges : [0, 0, 0, 0, 0];
}

function displayRecentlyWatched() {
    const container = document.getElementById('recentlyWatchedContainer');
    const userData = userDataManager.getUserData();

    if (userData.watchHistory.length === 0) {
        // Show sample movies instead
        const sampleMovies = moviesDatabase.slice(0, 6);
        container.innerHTML = sampleMovies.map(movie => {
            const cardHtml = createMovieCard(movie);
            return cardHtml.replace('col-lg-3 col-md-4 col-sm-6 col-12', 'col-auto');
        }).join('');
    } else {
        const recentMovies = userData.watchHistory.slice(-6).reverse().map(item => {
            const movie = getMovieById(item.movieId);
            return movie ? createMovieCard(movie) : '';
        }).join('');
        container.innerHTML = recentMovies;
    }
}

function displayRecommendations() {
    const container = document.getElementById('recommendedContainer');
    
    // Get random recommendations
    const shuffled = moviesDatabase.sort(() => Math.random() - 0.5);
    const recommendations = shuffled.slice(0, 6);

    const html = recommendations.map(movie => createMovieCard(movie)).join('');
    container.innerHTML = html;
}
