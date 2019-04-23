'use strict'

const express = require('express')
const router = express.Router()

const entriesController = require('../controllers/entriesController')


router.get('/getEntries', entriesController.getEntries)
router.post('/storeEntries', entriesController.storeEntries)

//append /api for our http requests
router.use("/api", router);


module.exports = router