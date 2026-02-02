# 🎬 BT Entertainment - Movie Recommendation Engine

A modern, responsive, and interactive movie recommendation engine frontend built with HTML, CSS, JavaScript, Bootstrap 5.3, Chart.js, SweetAlert2, and DataTables. The application features a Netflix-like dark theme with smooth animations and comprehensive movie management functionality.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Pages & Functionality](#pages--functionality)
- [Data Management](#data-management)
- [Responsive Design](#responsive-design)
- [Browser Compatibility](#browser-compatibility)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### User Data Capture
- 👤 **User Profile Management** - Set up and manage user profile information
- 🎯 **Preference Settings** - Select favorite genres, directors, and actors
- ⭐ **Movie Ratings** - Rate movies on a 1-10 star scale
- 📹 **Watch History** - Track movies watched with dates and progress
- 📚 **Watchlist** - Create and manage a personal watchlist
- 🔔 **Notification Preferences** - Customize notification settings

### Movie Metadata
- 🎬 **Complete Movie Information** - Title, year, duration, poster images
- 🏷️ **Genre Classification** - Movies organized by multiple genres
- 🎥 **Director & Cast** - Detailed director and actor information
- 📖 **Plot Summaries** - Full plot descriptions for each movie
- ⭐ **Rating Scores** - IMDb-style rating display (1-10)
- 🎨 **Visual Presentation** - High-quality poster displays

### Advanced Features
- 🔍 **Advanced Search** - Search by title, director, or actor name
- 🎯 **Smart Filtering** - Filter by genre, year, and rating
- 🧠 **Intelligent Recommendations** - Genre-based, actor-based, and director-based recommendations
- 📊 **Analytics Dashboard** - Interactive charts showing viewing patterns
- 📱 **Fully Responsive** - Mobile-first design for all devices
- ✨ **Smooth Animations** - Floating cards, slide transitions, fade effects
- 🎨 **Netflix-Like Theme** - Dark mode with red accent colors
- 🔔 **Sweet Alerts** - Beautiful notification system
- 📋 **DataTables** - Sortable and filterable data tables

---

## 📁 Project Structure

```
BTEntertainment/
├── index.html                 # Dashboard home page
├── movies.html                # Movie discovery page
├── profile.html               # User profile and preferences
├── recommendations.html       # Personalized recommendations
│
├── css/
│   └── style.css              # Complete styling (500+ lines)
│
├── js/
│   ├── data.js                # Movie database and user data manager
│   ├── app.js                 # Global utilities and functions
│   ├── dashboard.js           # Dashboard page functionality
│   ├── movies.js              # Movies page search and filter logic
│   ├── profile.js             # Profile and user data handling
│   └── recommendations.js     # Recommendation algorithms
│
└── README.md                  # This file
```

---

## 🛠️ Technology Stack

### Frontend Framework
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with animations and transitions
- **JavaScript (Vanilla)** - DOM manipulation and data handling

### UI & Styling
- **Bootstrap 5.3** - Responsive grid system and components
- **Font Awesome 6.4** - Icon library for intuitive UI elements

### Data Visualization
- **Chart.js 3.9.1** - Interactive charts and graphs
  - Doughnut chart for genre distribution
  - Bar chart for rating distribution

### User Notifications
- **SweetAlert2** - Beautiful toast notifications and confirmation dialogs

### Data Tables
- **DataTables 1.13.6** - Advanced table functionality with sorting and pagination
- **jQuery 3.6.0** - Required for DataTables

### CDN Dependencies
All external libraries are loaded from reliable CDNs for easy deployment and updates.

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Steps

1. **Download/Clone the Project**
   ```bash
   git clone <repository-url>
   cd BTEntertainment
   ```

2. **Using a Local Server (Recommended)**
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (http-server):**
   ```bash
   npm install -g http-server
   http-server
   ```

3. **Open in Browser**
   ```
   http://localhost:8000
   ```

### Direct File Opening
You can also open `index.html` directly in your browser, but some features may be limited due to CORS restrictions with localStorage.

---

## 📖 Usage

### Getting Started

1. **Dashboard** - Start at the home page to see overview and recommendations
2. **Set Preferences** - Go to Profile to set your favorite genres, directors, and actors
3. **Browse Movies** - Visit the Discover page to search and filter movies
4. **Rate Movies** - Click on any movie to view details and provide ratings
5. **Get Recommendations** - Check the "For You" page for personalized suggestions

### Key Interactions

**Movie Cards**
- Click the info icon to view full details
- Click the bookmark icon to add/remove from watchlist
- Hover to see smooth animations and transitions

**Search & Filter**
- Type in the search box to find movies
- Select genre, year, and rating filters
- Click "Apply Filters" to see results

**Profile Management**
- Navigate to Profile to manage preferences
- View watch history with progress tracking
- Check your ratings history
- Manage your watchlist

**Recommendations**
- Choose recommendation type (All, Genre-based, Actor-based, Director-based)
- Movies are grouped by genre for easy browsing

---

## 📄 Pages & Functionality

### 1. **Dashboard (index.html)**
The main landing page featuring:
- Hero section with call-to-action buttons
- Statistics cards (movies available, average rating, active users)
- Genre distribution chart (doughnut)
- Rating distribution chart (bar)
- Recently watched movies carousel
- Recommended movies grid

### 2. **Discover (movies.html)**
Movie browsing and discovery:
- **Search Bar** - Real-time search by title, director, or actor
- **Genre Filter** - Select from 8 genres (Action, Drama, Comedy, Horror, Sci-Fi, Romance, Thriller, Animation)
- **Year Slider** - Filter by release year (2010-2026)
- **Rating Slider** - Filter by minimum rating (0-10)
- **Movie Grid** - Responsive card layout
- **Detail Modal** - View complete movie information
- **Rating Modal** - Rate movies with interactive star selector

### 3. **Profile (profile.html)**
User profile management with tabs:
- **Preferences Tab**
  - Genre selection checkboxes
  - Favorite directors input
  - Favorite actors input
  - Content rating selection
  - Notification preferences
  
- **Watch History Tab**
  - DataTable with movie titles, dates, duration
  - Progress bars for viewing completion
  - Delete functionality
  
- **Ratings Tab**
  - DataTable showing all rated movies
  - Star ratings display
  - Edit/delete options
  
- **Watchlist Tab**
  - Grid view of bookmarked movies
  - Quick access to movie details

### 4. **Recommendations (recommendations.html)**
Intelligent recommendation engine:
- **All Recommendations** - Combined from all sources
- **Genre-Based** - Movies matching favorite genres
- **Actor-Based** - Movies featuring favorite actors
- **Director-Based** - Movies by favorite directors
- **Grouped Display** - Movies organized by genre
- **Empty State** - Guidance when no recommendations available

---

## 💾 Data Management

### Local Storage
All user data is stored in browser's localStorage for persistence:

```javascript
{
  "profile": {
    "name": "John Doe",
    "joinDate": "January 15, 2024",
    "avatar": "URL"
  },
  "preferences": {
    "favoriteGenres": ["action", "drama"],
    "favoriteDirectors": ["Christopher Nolan"],
    "favoriteActors": ["Leonardo DiCaprio"],
    "contentRating": "R",
    "notifications": {
      "newReleases": true,
      "recommendations": true
    }
  },
  "ratings": [
    {
      "movieId": 1,
      "rating": 9,
      "date": "2/2/2026"
    }
  ],
  "watchHistory": [
    {
      "movieId": 1,
      "watchedDate": "2/2/2026",
      "duration": "2h 28m",
      "progress": 75
    }
  ],
  "watchlist": [1, 2, 3]
}
```

### Movie Database
15 sample movies included with:
- Complete metadata (title, genre, director, cast, plot, rating, year)
- Placeholder poster images
- Duration information

### UserDataManager Class
Provides methods for:
- `getUserData()` - Retrieve all user data
- `updatePreferences()` - Update user preferences
- `addRating()` - Save or update movie rating
- `addToWatchHistory()` - Log watched movie
- `addToWatchlist()` - Add to watchlist
- `removeFromWatchlist()` - Remove from watchlist
- `getRating()` - Get user's rating for a movie
- `getStats()` - Get user statistics

---

## 📱 Responsive Design

### Breakpoints
- **Desktop** (1200px+) - Full layout with 3-4 columns
- **Tablet** (768px - 1199px) - 2-3 columns
- **Mobile** (480px - 767px) - 2 columns
- **Small Mobile** (< 480px) - Single column

### Features
- ✅ Mobile-first approach
- ✅ Touch-friendly buttons and inputs
- ✅ Optimized animations for mobile
- ✅ Hamburger navigation menu
- ✅ Flexible grid system
- ✅ Responsive images and modals

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full Support |
| Firefox | Latest | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | Latest | ✅ Full Support |
| Chrome Mobile | Latest | ✅ Full Support |
| Safari iOS | 14+ | ✅ Full Support |
| Samsung Internet | Latest | ✅ Full Support |

---

## 🎨 Design Features

### Color Scheme
- **Primary Dark** - #0f0f0f (Background)
- **Secondary Dark** - #1a1a1a (Cards)
- **Tertiary Dark** - #2a2a2a (Hover states)
- **Accent Red** - #e50914 (Netflix-style)
- **Text White** - #ffffff
- **Text Muted** - #808080

### Animations
- **Float Animation** - 3s infinite floating effect
- **Slide In** - 0.6s entrance animations
- **Fade Scale** - Smooth scale and fade transitions
- **Hover Effects** - Translate, shadow, and color changes
- **Transition Duration** - 0.3s smooth transitions

### Interactive Elements
- Animated buttons with hover states
- Smooth card elevation on interaction
- Progress bars for watch history
- Star rating system with hover feedback
- DataTable row highlighting
- Scrollable movie carousel

---

## 🔧 JavaScript Functions

### Core Utilities (app.js)
- `navigateTo()` - Page navigation
- `getMovieById()` - Retrieve movie data
- `createMovieCard()` - Generate movie card HTML
- `showMovieDetail()` - Display movie details modal
- `showAlert()` - SweetAlert notifications
- `showConfirm()` - Confirmation dialogs
- `generateStars()` - Star rating display
- `getChartDefaults()` - Chart.js configuration

### Dashboard (dashboard.js)
- `initializeDashboard()` - Setup dashboard
- `displayStats()` - Show statistics
- `initializeCharts()` - Create interactive charts
- `displayRecentlyWatched()` - Show recent movies
- `displayRecommendations()` - Show recommended movies

### Movies (movies.js)
- `filterMovies()` - Apply search and filters
- `displayMovies()` - Render movie grid
- `applyFilters()` - Filter action handler

### Profile (profile.js)
- `initializeProfile()` - Load user preferences
- `savePreferences()` - Save user settings
- `displayWatchHistory()` - Show watch history table
- `displayRatings()` - Show ratings table
- `displayWatchlist()` - Show watchlist grid
- `removeFromWatchHistory()` - Delete history item
- `removeRating()` - Delete rating

### Recommendations (recommendations.js)
- `displayRecommendations()` - Show recommendations
- `getAllRecommendations()` - Get all recommendations
- `getGenreBasedRecommendations()` - Genre-based algorithm
- `getActorBasedRecommendations()` - Actor-based algorithm
- `getDirectorBasedRecommendations()` - Director-based algorithm
- `groupRecommendationsByGenre()` - Group by genre

---

## 📊 Sample Data

### Included Movies (15 total)
1. **Inception** (2010) - Sci-Fi, Action | Rating: 8.8
2. **The Shawshank Redemption** (1994) - Drama | Rating: 9.3
3. **The Dark Knight** (2008) - Action, Crime, Drama | Rating: 9.0
4. **Pulp Fiction** (1994) - Crime, Drama | Rating: 8.9
5. **Forrest Gump** (1994) - Drama, Romance | Rating: 8.8
6. **The Matrix** (1999) - Sci-Fi, Action | Rating: 8.7
7. **Interstellar** (2014) - Sci-Fi, Drama, Adventure | Rating: 8.6
8. **The Godfather** (1972) - Crime, Drama | Rating: 9.2
9. **Gladiator** (2000) - Action, Adventure, Drama | Rating: 8.5
10. **The Shining** (1980) - Horror, Drama | Rating: 8.4
11. **Avatar** (2009) - Sci-Fi, Action, Adventure | Rating: 7.8
12. **The Silence of the Lambs** (1991) - Thriller, Crime, Drama | Rating: 8.6
13. **Toy Story** (1995) - Animation, Adventure, Comedy | Rating: 8.3
14. **The Lion King** (1994) - Animation, Adventure, Comedy | Rating: 8.5
15. **Titanic** (1997) - Romance, Drama | Rating: 7.9

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Backend API integration for real movie database
- [ ] User authentication and sign-up system
- [ ] Social features (friend lists, reviews, ratings)
- [ ] Advanced recommendation algorithms (ML-based)
- [ ] Movie streaming integration
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Export user data functionality
- [ ] Movie trailer integration (YouTube)
- [ ] Advanced analytics dashboard

### Performance Optimizations
- [ ] Lazy loading for images
- [ ] Pagination for large datasets
- [ ] Service workers for offline support
- [ ] Progressive Web App (PWA) features
- [ ] Image optimization and compression

### Additional Improvements
- [ ] Accessibility (WCAG 2.1 AA compliance)
- [ ] SEO optimization
- [ ] Keyboard navigation enhancements
- [ ] Voice search functionality
- [ ] Movie comparison tools

---

## 📝 License

This project is provided as-is for educational and commercial use.

---

## 👨‍💻 Developer Notes

### Key Implementation Details

**Responsive Grid System**
- Bootstrap's 12-column grid for flexibility
- Custom breakpoints in CSS for specific adjustments
- Mobile-first approach throughout

**State Management**
- LocalStorage for persistence
- UserDataManager class for centralized data handling
- Automatic data initialization on first visit

**Animation Performance**
- CSS animations (GPU-accelerated)
- Staggered animations using animation-delay
- Optimized transitions for smooth 60fps performance

**Accessibility**
- Semantic HTML structure
- ARIA labels where applicable
- Keyboard-navigable components
- Sufficient color contrast ratios

---

## 📞 Support

For issues, feature requests, or improvements, please contact the development team.

---

## 🎯 Version Information

- **Current Version:** 1.0
- **Release Date:** February 2, 2026
- **Last Updated:** February 2, 2026
- **Status:** Production Ready

---

**Happy Movie Watching! 🎬🍿**
