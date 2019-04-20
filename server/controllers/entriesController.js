'use strict'

module.exports = {

  getEntries(req, res) {
    res.json({
      music: [{
        "band": "radiohead",
        "song": "lucky"
      }]
    })
  }
}



/*
res.json({
  music: [{
    "band": "radiohead",
    "song": "lucky"
  }]
})
*/