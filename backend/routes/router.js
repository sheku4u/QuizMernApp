import express from 'express'
import {getCurrentUser, loginUser, logoutUser, registerUser} from '../controllers/user.controller.js'
import { isUserLoggedIn } from '../middleware/auth.js'


const router = express.Router()

router.post('/register', registerUser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/getProfile',isUserLoggedIn,getCurrentUser)
// router('/register', registerUser)



export default router