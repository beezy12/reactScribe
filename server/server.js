'use strict'

const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = 4001;
const app = express();
app.use(cors());
const router = express.Router();

//app.use(express.static(path.join(__dirname, '/client/public')))

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.get('/', (req, res) => {
  res.json({
    message: 'scribe!!'
  })
})


/*
 BOILERPLATE SENDS BACK:
 {
    "success": true,
    "data": [
        {
            "_id": "5cba6b8b36c104054d0fd2a6",
            "message": "adding this",
            "id": 0,
            "createdAt": "2019-04-20T00:44:59.384Z",
            "updatedAt": "2019-04-20T00:44:59.384Z",
            "__v": 0
        },
        {
            "_id": "5cba6c0936c104054d0fd2a7",
            "message": "that that",
            "id": 1,
            "createdAt": "2019-04-20T00:47:05.799Z",
            "updatedAt": "2019-04-20T00:47:05.799Z",
            "__v": 0
        }
    ]
}
*/


/* this sends back: 
{
  "songs": [
    {
      "radiohead": "let down",
      "the verve": "this time"
    }
  ]
}
*/

router.get('/getData', (req, res) => {
  res.json({ "music": [{
    band: "radiohead",
    song: "let down"
  }]})
})

// append /api for our http requests
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
