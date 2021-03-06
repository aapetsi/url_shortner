import express from 'express'
import { login, register } from '../../controllers/auth/auth.controller'

const router = express.Router()

// @route POST api/auth/register
// @desc Register new user
// @access Public
router.post('/register', register)

// @route POST api/auth/login
// @desc Login  user
// @access Public
router.post('/login', login)

export default router
