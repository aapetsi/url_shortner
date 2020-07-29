import express from 'express'
import {registerUser, loginUser} from '../../controllers/url/user.controller'
const router = express.Router()

// Controllers
// routes
router.post('/login', loginUser)

router.post('/register', registerUser)

export default router
