const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');

const app = require('../index');
const movies = require('../movies.json')

describe('Server Routes', () => {
  describe('POST /', () => {
    it('should report error when not sent movies data', () => {
      return request(app)
        .post('/')
        .send()
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.error).to.be.equal('No movies data en body request');
        });
    });
    it('should report error when sent other data', () => {
      return request(app)
        .post('/')
        .send({ testData: [] })
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.error).to.be.equal('No movies data en body request');
        });
    });

    it('should report error when movies data is not a object', () => {
      return request(app)
        .post('/')
        .send({ movies: 'test' })
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.error).to.be.equal('No movies data en body request');
        });
    });
    it('Get list Array Ok', () => {
      return request(app)
        .post('/')
        .send({ movies })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array')
        });
    });

    it('Get list Array Ok one filter', () => {
      const filters = [{ key: 'actors', value: 'Alec Baldwin', isArray: true }]
      return request(app)
        .post('/')
        .send({ movies, filters })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array')
        });
    })

    it('Get list Array Ok tow or more filter', () => {
      const filters = [{ key: 'actors', value: 'Alec Baldwin', isArray: true }, { key: 'genre', value: 'Comics', isArray: true }]
      return request(app)
        .post('/')
        .send({ movies, filters })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array')
        });
    })
  })
})