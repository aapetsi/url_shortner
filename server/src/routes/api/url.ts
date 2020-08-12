import express from 'express'
import { getUrls, createShortLink, deleteLink, deleteAll } from '../../controllers/url/url.controller'
const router = express.Router()

// @route POST api/url/createShortLink
// @desc Shorten a url
// @access Public
router.post('/createShortLink', createShortLink)

// @route GET api/url/get_urls
// @desc Get shortened urls
// @access Public
router.get('/get_urls', getUrls)

// @route DELETE api/url/one/:id
// @desc Delete one url
// @access Public
router.delete('/one/:id', deleteLink)

// @route DELETE api/url/all
// @desc Delete all urls
// @access Public
router.delete('/all', deleteAll)

export default router
