import express from 'express'
import {
  createTrip,
  getAllTrips,
  cancelTrip,
  filterTripByOrigin,
  filterTripByDestination,
} from '../controllers/tripController'
import verifyAuth from '../middleware/verifyAuth'

const router = express.Router()


router.post('/trips', verifyAuth, createTrip)
router.get('/trips', verifyAuth, getAllTrips)
router.patch('/trips/:tripId', verifyAuth, cancelTrip)
router.get('/trips/origin', verifyAuth, filterTripByOrigin)
router.get('/trips/destinatiovan', verifyAuth, filterTripByDestination)

export default router
