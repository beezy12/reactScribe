'use strict'

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = 4001;
const app = express();
app.use(cors());
//const router = express.Router();

const routes = require('./routes/entriesRouter')


//app.use(express.static(path.join(__dirname, '/client/public')))

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(routes)

// app.get('/', (req, res) => {
//   res.json({
//     message: 'scribe!!'
//   })
// })

// app.get('/getEntries', (req, res) => {
//   res.json()
// })

// append /api for our http requests
//app.use("/api", router);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
