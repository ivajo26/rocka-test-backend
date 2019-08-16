const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.json('Hello World')
})

//Launch listening server on port 8000
app.listen(8000, function () {
  console.log('App listening on port 8000!')
})