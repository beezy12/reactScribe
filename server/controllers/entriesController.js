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

  async storeEntries(req, res) {
    let data = new entriesModel()
    const { entryTitle, entryBody } = req.body.entry
    console.log('**server side, title: ****', entryTitle)
    console.log('**server side, body: ****', entryBody)
    data.entryTitle = entryTitle
    data.entryBody = entryBody
    await data.save(err => {
      //if (err) return handleError(err)

      return res.json({ success: true })

    })
  }

}
