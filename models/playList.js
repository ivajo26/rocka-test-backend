const Movie = require('./movie')
class PlayListService {
    constructor(movies) {
        this.movies = movies.map(movie => new Movie(movie))
    }

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