import express from 'express'
import {getUrls, createShortLink} from '../../controllers/url/url.controller'
const router = express.Router()

// Controllers
// routes
router.post('/createShortLink', createShortLink)

router.get('/get_urls', getUrls)

// module.exports = router

export default router
