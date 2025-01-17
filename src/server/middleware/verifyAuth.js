import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {
  errorMessage, status,
} from '../utils/status'

dotenv.config()

const verifyToken = async (req, res, next) => { // eslint-disable-line
  const { token } = req.headers
  if (!token) {
    errorMessage.error = 'Token is missing'
    return res.status(status.bad).send(errorMessage)
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = {
      email: decoded.email,
      user_id: decoded.user_id,
      is_admin: decoded.is_admin,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
    }
    next()
  } catch (error) {
    errorMessage.error = 'Authentication Failed'
    return res.status(status.unauthorized).send(errorMessage)
  }
}

export default verifyToken
