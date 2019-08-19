class Movie {
    constructor(data) {
        this.title = data.title || ''
        this.year = data.year || ''
        this.genres = data.genres || ''
        this.ratings = data.ratings || ''
        this.poster = data.poster || ''
        this.contentRating = data.contentRating || ''
        this.duration = data.duration || ''
        this.releaseDate = data.releaseDate || ''
        this.averageRating = data.averageRating || ''
        this.originalTitle = data.originalTitle || ''
        this.storyline = data.storyline || ''
        this.actors = data.actors || ''
        this.imdbRating = data.imdbRating || ''
        this.posterurl = data.posterurl || ''
    }

    // Method that returns true or false if the actor exists
    hasActor(actor) {
        return this.actors.indexOf(actor) !== -1
    }

    // Method that returns true or false if the genre exists
    hasGenre(genre) {
        return this.genres.indexOf(genre) !== -1
    }

    // Method that returns true or false if the imdbRating exists
    hasImdbRating(imdbRating) {
        return this.imdbRating === imdbRating
    }

    // Method that calculate raiting average
    getAverageRating() {
        return this.ratings.reduce((a, b) => a + b) / this.ratings.length
    }
}

module.exports = Movie