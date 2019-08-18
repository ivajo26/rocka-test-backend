const express = require('express')
const bodyParser = require('body-parser')
const httpStatus = require('http-status');
const app = express()

const playListService = require('./models/playList')

app.use(bodyParser.json());

//Define request response in root URL (/)
app.post('/', function (req, res) {
  const { movies, filters } = req.body
  if(!movies || typeof movies !== 'object') {
    res.status(httpStatus.BAD_REQUEST)
    return res.json({error: 'No movies data en body request'})
  }
  const playList = new playListService(movies)
  res.status(httpStatus.OK)
  return res.json(playList.getList(filters || []))
})

//Launch listening server on port 8000
app.listen(8000, function () {
  console.log('App listening on port 8000!')
})

module.exports = app
