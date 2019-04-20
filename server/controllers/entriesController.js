'use strict'

const entriesModel = require('../models/entriesModel')


module.exports = {

  async getEntries(req, res) {
    const entries = await entriesModel.find((err, data) => {
      console.log(data)

      if (err) return res.json({ success: false, error: err })

      res.send(data)
    })
  }
}
