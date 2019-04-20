'use strict'

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const logger = require('morgan');
const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());

mongoose.connect(keys.mongoURI)
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));


const routes = require('./routes/entriesRouter')


//app.use(express.static(path.join(__dirname, '/client/public')))

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(routes)


app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
