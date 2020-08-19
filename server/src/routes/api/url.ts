import express from 'express'
import { getUrls, createShortLink, deleteLink, deleteAll } from '../../controllers/url/url.controller'
import authenticateMiddleware from '../../middleware/authenticateMiddleware'

const router = express.Router()

// @route POST api/url/createShortLink
// @desc Shorten a url
// @access Public
router.post('/createShortLink', authenticateMiddleware, createShortLink)

// @route GET api/url/get_urls
// @desc Get shortened urls
// @access Public
router.get('/get_urls', authenticateMiddleware, getUrls)

// @route DELETE api/url/one/:id
// @desc Delete one url
// @access Public
router.delete('/one/:id', authenticateMiddleware, deleteLink)

// @route DELETE api/url/all
// @desc Delete all urls
// @access Public
router.delete('/all', authenticateMiddleware, deleteAll)

export default router
