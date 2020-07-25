import express from 'express'
import { getUrls, createShortLink, deleteLink, deleteAll } from '../../controllers/url/url.controller'
const router = express.Router()

// Controllers
// routes
router.post('/createShortLink', createShortLink)

router.get('/get_urls', getUrls)

router.delete('/one/:shortUrl', deleteLink)

router.delete('/all', deleteAll)

export default router
