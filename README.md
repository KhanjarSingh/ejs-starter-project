# EJS Movie Library

A simple Express.js web application demonstrating EJS templating with a movie database. This project showcases server-side rendering using EJS templates to display movie information with images and details.

## 🎬 Features

- Display individual movie details
- Show multiple movies in a grid layout
- Dynamic content rendering with EJS templates
- Movie information includes title, release year, rating, actors, and poster images
- Template partials and includes for reusable components

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Development**: Nodemon for auto-restart

## 📁 Project Structure

```
EJS library/
├── views/
│   ├── layout.ejs      # Main layout template for multiple movies
│   └── movie.ejs       # Individual movie template
├── index.js            # Main server file
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Dependency lock file
└── .gitignore         # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd "EJS library"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📋 API Endpoints

### `/movie`
- **Method**: GET
- **Description**: Displays a single movie (Inception) with detailed information
- **Template**: `movie.ejs`

### `/movie-with-image`
- **Method**: GET  
- **Description**: Displays all movies in the database using layout template
- **Template**: `layout.ejs` (includes `movie.ejs` for each movie)

## 🎭 Movie Database

The application includes a sample database of 4 movies:

1. **Inception** (2010) - Rating: 8.8
2. **R... Rajkumar** (2013) - Rating: 5.3  
3. **Hum Sath Sath Hai** (1999) - Rating: 6.4
4. **Kuch Kuch Hota Hai** (1998) - Rating: 7.5

Each movie contains:
- Title
- Release Year
- IMDb Rating
- Cast (Actors)
- Poster Image URL

## 🎨 Template Structure

### movie.ejs
Individual movie template that displays:
- Movie title, release year, and rating
- List of actors
- Movie poster image (200x300px)

### layout.ejs
Main layout template that:
- Iterates through the movies array
- Includes the `movie.ejs` template for each movie
- Creates a comprehensive movie listing page

## 🔧 EJS Features Demonstrated

- **Variable Interpolation**: `<%= variable %>`
- **HTML Rendering**: `<%- include() %>`
- **Control Flow**: `<% forEach() %>`
- **Template Includes**: Partial templates for reusability
- **Data Passing**: Passing objects and arrays to templates

## 📦 Dependencies

```json
{
  "ejs": "^3.1.10",
  "express": "^5.1.0", 
  "nodemon": "^3.1.11"
}
```

## 🚀 Future Enhancements

- Add movie search functionality
- Implement movie filtering by genre/year
- Add movie details page with more information
- Include CSS styling for better UI
- Add database integration (MongoDB/PostgreSQL)
- Implement CRUD operations for movies

## 📝 Learning Objectives

This project demonstrates:
- Setting up Express.js with EJS templating
- Creating dynamic web pages with server-side rendering
- Using EJS template syntax and features
- Organizing templates with partials and includes
- Passing data from server to templates
- Basic web application structure

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the ISC License.