import express from 'express'

import { createAdmin, updateUserToAdmin } from '../controllers/adminController'
import verifyAuth from '../middleware/verifyAuth'

const router = express.Router()

router.post('/admin/signup', createAdmin)
router.get('/admin/signin', verifyAuth, updateUserToAdmin)
export default router
