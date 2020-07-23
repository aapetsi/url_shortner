const express = require('express')
const router = express.Router()
const urlController = require('../../controllers/url/url.controller.js')

// Controllers
// routes
router.post('/createShortLink', urlController.createShortLink)

router.get('/get_urls', urlController.getUrls)

module.exports = router
