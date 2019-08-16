const { expect } = require('chai');
const movies = require('../movies.json')
const playListService = require('../models/playList')

describe('Play List Service', () => {
    const playList = new playListService(movies)
    it('Get List to be a Array', () => {
        expect(playList.getList()).to.be.an('array')
    })

    it('should return array when send one filter', () => {
        expect(playList.getList([{ key: 'actors', value: 'Alec Baldwin', isArray: true }])).to.be.an('array')
    })

    it('should return array when send tow or more filter', () => {
        expect(playList.getList([{ key: 'actors', value: 'Alec Baldwin', isArray: true }, { key: 'genre', value: 'Comics', isArray: true }])).to.be.an('array')
    })
})