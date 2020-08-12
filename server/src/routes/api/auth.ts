import express from 'express'
import { login, register } from '../../controllers/auth/auth.controller'

const router = express.Router()

// Controllers
// routes
router.post('/register', register)

router.get('/login', login)

export default router
