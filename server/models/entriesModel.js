'use strict'

const mongoose = require('mongoose')


const EntrySchema = new mongoose.Schema({
  entryTitle: String,
  entryBody: String
})



module.exports = mongoose.model('entries', EntrySchema)
