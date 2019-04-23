'use strict'

const entriesModel = require('../models/entriesModel')


module.exports = {

  async getEntries(req, res) {
    const entries = await entriesModel.find((err, data) => {
      console.log(data)

      if (err) return res.json({ success: false, error: err })

      res.send(data)
    })
  },

  storeEntries(req, res) {
    let data = new entriesModel()
    console.log('req.body here: ', req.body)
    const entryToAdd = req.body.entry
    console.log('about to save this to the database: ', entryToAdd)
    data.entry = entryToAdd
    data.save(err => {
      if (err) return handleError(err)

      return res.json({ success: true })

    })
  }

}
