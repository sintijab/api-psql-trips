import express from 'express'

import { addBusDetails, getAllBuses } from '../controllers/busController'
import verifyAuth from '../middleware/verifyAuth'

const router = express.Router()

router.post('/buses', verifyAuth, addBusDetails)
router.get('/buses', verifyAuth, getAllBuses)
export default router
