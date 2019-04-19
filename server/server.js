'use strict'

const express = require('express')
const app = express()

const axios = require('axios')
const keys = require('./config/keys').mongoURI  // THIS IS TEMPORARY, until I get env keys set
console.log(keys)
//const mongoURI = require('./config/dev').mongoURI // THIS IS TEMPORARY, until I get env keys set
//console.log(mongoURI)
const logger = require('morgan')
const path = require('path')

const PORT = 3001

//app.use(express.static(path.join(__dirname, '/client/public')))
app.use(logger("dev"));

// const apiurl = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8XBbzkkiRTpy0FXwYjiG0igADNboXdUA"

// axios.get(apiurl)
//   .then(res => {
//     //console.log(response);
//     console.log(response.data.results.books[0]);
//     res.send(response.data.results.books[0]);
//   })
//   .catch(error => {
//     console.log(error);
//   });


app.get('/', (req, res) => {
  res.json({
    message: 'welcome!'
  })
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})