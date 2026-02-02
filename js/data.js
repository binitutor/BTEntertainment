// Sample Movie Data
const moviesDatabase = [
    {
        id: 1,
        title: "Inception",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Inception",
        genre: ["sci-fi", "action"],
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Marion Cotillard", "Joseph Gordon-Levitt"],
        year: 2010,
        rating: 8.8,
        plot: "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        duration: "2h 28m"
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Shawshank",
        genre: ["drama"],
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman"],
        year: 1994,
        rating: 9.3,
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        duration: "2h 22m"
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Dark+Knight",
        genre: ["action", "crime", "drama"],
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        year: 2008,
        rating: 9.0,
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.",
        duration: "2h 32m"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Pulp+Fiction",
        genre: ["crime", "drama"],
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        year: 1994,
        rating: 8.9,
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        duration: "2h 34m"
    },
    {
        id: 5,
        title: "Forrest Gump",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Forrest+Gump",
        genre: ["drama", "romance"],
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Sally Field", "Gary Sinise"],
        year: 1994,
        rating: 8.8,
        plot: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
        duration: "2h 22m"
    },
    {
        id: 6,
        title: "The Matrix",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=The+Matrix",
        genre: ["sci-fi", "action"],
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        year: 1999,
        rating: 8.7,
        plot: "A computer programmer discovers that reality as he knows it is a simulation created by machines.",
        duration: "2h 16m"
    },
    {
        id: 7,
        title: "Interstellar",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Interstellar",
        genre: ["sci-fi", "drama", "adventure"],
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        year: 2014,
        rating: 8.6,
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        duration: "2h 49m"
    },
    {
        id: 8,
        title: "The Godfather",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=The+Godfather",
        genre: ["crime", "drama"],
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        year: 1972,
        rating: 9.2,
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.",
        duration: "2h 55m"
    },
    {
        id: 9,
        title: "Gladiator",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Gladiator",
        genre: ["action", "adventure", "drama"],
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Lucilla Ranieri"],
        year: 2000,
        rating: 8.5,
        plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        duration: "2h 35m"
    },
    {
        id: 10,
        title: "The Shining",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=The+Shining",
        genre: ["horror", "drama"],
        director: "Stanley Kubrick",
        cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
        year: 1980,
        rating: 8.4,
        plot: "A family isolated by heavy snow is visited by supernatural horrors in an old hotel where a sinister presence influences the father.",
        duration: "2h 26m"
    },
    {
        id: 11,
        title: "Avatar",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Avatar",
        genre: ["sci-fi", "action", "adventure"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Stephen Lang"],
        year: 2009,
        rating: 7.8,
        plot: "A paraplegic Marine dispatched to the moon Pandora joins with the natives against an imperialist corporation.",
        duration: "2h 42m"
    },
    {
        id: 12,
        title: "The Silence of the Lambs",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Silence+of+Lambs",
        genre: ["thriller", "crime", "drama"],
        director: "Jonathan Demme",
        cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
        year: 1991,
        rating: 8.6,
        plot: "A young FBI cadet must receive the help of an incarcerated cannibal killer to help catch another serial killer.",
        duration: "1h 58m"
    },
    {
        id: 13,
        title: "Toy Story",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Toy+Story",
        genre: ["animation", "adventure", "comedy"],
        director: "John Lasseter",
        cast: ["Tom Hanks", "Tim Allen"],
        year: 1995,
        rating: 8.3,
        plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's bedroom.",
        duration: "1h 21m"
    },
    {
        id: 14,
        title: "The Lion King",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Lion+King",
        genre: ["animation", "adventure", "comedy"],
        director: "Roger Allers, Rob Minkoff",
        cast: ["James Earl Jones", "Jeremy Irons", "Matthew Broderick"],
        year: 1994,
        rating: 8.5,
        plot: "Lion prince Simba flees his kingdom after the death of his father, only to discover the truth about his origins.",
        duration: "1h 28m"
    },
    {
        id: 15,
        title: "Titanic",
        poster: "https://via.placeholder.com/300x450/1a1a1a/ff0000?text=Titanic",
        genre: ["romance", "drama"],
        director: "James Cameron",
        cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        year: 1997,
        rating: 7.9,
        plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        duration: "3h 14m"
    }
];

// User Data Storage (using localStorage)
class UserDataManager {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        if (!localStorage.getItem('userData')) {
            const userData = {
                profile: {
                    name: 'John Doe',
                    joinDate: 'January 15, 2024',
                    avatar: 'https://via.placeholder.com/150/1a1a1a/ff0000?text=USER'
                },
                preferences: {
                    favoriteGenres: ['action', 'drama'],
                    favoriteDirectors: ['Christopher Nolan', 'Quentin Tarantino'],
                    favoriteActors: ['Leonardo DiCaprio', 'Morgan Freeman'],
                    contentRating: 'R',
                    notifications: {
                        newReleases: true,
                        recommendations: true
                    }
                },
                ratings: [],
                watchHistory: [],
                watchlist: []
            };
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }

    getUserData() {
        return JSON.parse(localStorage.getItem('userData')) || {};
    }

    updatePreferences(preferences) {
        const userData = this.getUserData();
        userData.preferences = { ...userData.preferences, ...preferences };
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    addRating(movieId, rating) {
        const userData = this.getUserData();
        const existingRating = userData.ratings.findIndex(r => r.movieId === movieId);
        
        if (existingRating !== -1) {
            userData.ratings[existingRating] = {
                movieId,
                rating,
                date: new Date().toLocaleDateString()
            };
        } else {
            userData.ratings.push({
                movieId,
                rating,
                date: new Date().toLocaleDateString()
            });
        }
        
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    addToWatchHistory(movieId) {
        const userData = this.getUserData();
        userData.watchHistory.push({
            movieId,
            watchedDate: new Date().toLocaleDateString(),
            duration: '100 min',
            progress: Math.floor(Math.random() * 100)
        });
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    addToWatchlist(movieId) {
        const userData = this.getUserData();
        if (!userData.watchlist.includes(movieId)) {
            userData.watchlist.push(movieId);
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }

    removeFromWatchlist(movieId) {
        const userData = this.getUserData();
        userData.watchlist = userData.watchlist.filter(id => id !== movieId);
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    getRating(movieId) {
        const userData = this.getUserData();
        const rating = userData.ratings.find(r => r.movieId === movieId);
        return rating ? rating.rating : null;
    }

    getStats() {
        const userData = this.getUserData();
        return {
            moviesWatched: userData.watchHistory.length,
            ratingsGiven: userData.ratings.length,
            watchlistCount: userData.watchlist.length
        };
    }
}

// Initialize user data manager
const userDataManager = new UserDataManager();
