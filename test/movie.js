const { expect } = require('chai');
const movies = require('../movies.json')
const Movie = require('../models/movie')

describe('Movie Model', () => {
    const movie = new Movie(movies[0])
    it('should save the data when creating run constructor', () => {
        expect(movie).to.have.a.property('title');
        expect(movie).to.have.a.property('year');
        expect(movie).to.have.a.property('genres');
        expect(movie).to.have.a.property('ratings');
        expect(movie).to.have.a.property('poster');
        expect(movie).to.have.a.property('contentRating');
        expect(movie).to.have.a.property('duration');
        expect(movie).to.have.a.property('releaseDate');
        expect(movie).to.have.a.property('averageRating');
        expect(movie).to.have.a.property('originalTitle');
        expect(movie).to.have.a.property('storyline');
        expect(movie).to.have.a.property('actors');
        expect(movie).to.have.a.property('imdbRating');
        expect(movie).to.have.a.property('posterurl');
    })

    it('should return boolean when ask for a actor', () => {
        expect(movie.hasActor('Alec Baldwin')).to.have.a.an('boolean');
    })

    it('should return boolean when ask for a genre', () => {
        expect(movie.hasGenre('Comic')).to.have.a.an('boolean');
    })

    it('should return boolean when ask for a ImdbRating', () => {
        expect(movie.hasImdbRating('9')).to.have.a.an('boolean');
    })

    it('should return number when ask for a averate rating', () => {
        expect(movie.getAverageRating()).to.have.a.an('number');
    })
})