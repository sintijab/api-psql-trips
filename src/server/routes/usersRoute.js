import express from 'express'

import { createUser, siginUser } from '../controllers/usersController'
import verifyAuth from '../middleware/verifyAuth'

const router = express.Router()

router.get('/auth/signin', verifyAuth, siginUser)
router.post('/auth/signup', createUser)

export default router
