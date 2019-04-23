'use strict'

const mongoose = require('mongoose')


const EntrySchema = new mongoose.Schema({
  entry: String
})



module.exports = mongoose.model('entries', EntrySchema)
