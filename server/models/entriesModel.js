'use strict'

const mongoose = require('mongoose')


const EntrySchema = new mongoose.Schema({
  title: String,
  entry: String
})



module.exports = mongoose.model('entries', EntrySchema)
