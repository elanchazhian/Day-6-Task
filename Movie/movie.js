class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    
];

const pgMovies = Movie.getPG(moviesArray);

// Array containing movies with a rating of "PG"
console.log(pgMovies);