const express = require('express');
const db = require('./data/db')

const server = express();
const port = 5000;

server.get('/', (req, res) => {
  res.send('Hello and welcome to my first web API')
})

server.get('/users', (req, res) => {
  db.find()
    .then( reso => {
      res.status(200).json(reso);
    })
    .catch( err => {
      res.status(500)
    })
})

server.listen(port, console.log('server is running on port 5000'))