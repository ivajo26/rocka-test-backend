const Movie = require('./movie')

class PlayListService {
    constructor(movies) {
        this.movies = movies.map(movie => new Movie(movie)) // Build the array of movie models
    }

    // Method to get the playlist
    getList(filters = []) {
        if (filters.length === 0) {
            return this.movies
        } else {
            let newList = this.movies
            filters.forEach(filter => {
                newList = this.filter(filter.value, filter.key, newList, filter.isArray)
            })
            return newList
        }
    }

    // Method to filter, receive by parameter, key, value, data and data type
    filter(value, key, data, isArray = true) {
        if (!value) {
            return data
        }
        switch(key) {
            case 'actors':
                return data.filter(item => item.hasActor(value))
            case 'genre':
                return data.filter(item => item.hasGenre(value))
            case 'imdbRating':
                return data.filter(item => item.hasImdbRating(value))
            case 'averageRating':
                return data.filter(item => item.getAverageRating() === value)
            default:
                return data
        }
    }
}

module.exports = PlayListService