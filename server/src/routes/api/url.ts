import express from 'express'
import { getUrls, createShortLink, deleteLink } from '../../controllers/url/url.controller'
const router = express.Router()

// Controllers
// routes
router.post('/createShortLink', createShortLink)

router.get('/get_urls', getUrls)

router.delete('/:shortUrl', deleteLink)

export default router
