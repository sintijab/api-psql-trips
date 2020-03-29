import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const isValidEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/
  return regEx.test(email)
}


const validatePassword = (password) => {
  if (password.length <= 5 || password === '') {
    return false
  } return true
}

const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true
  }
  if (input.replace(/\s/g, '').length) {
    return false
  } return true
}


const empty = (input) => {
  if (input === undefined || input === '') {
    return true
  }
  return false
}

const generateUserToken = (email, id, is_admin, first_name, last_name) => { // eslint-disable-line
  const token = jwt.sign({
    email,
    user_id: id,
    is_admin,
    first_name,
    last_name,
  },
  process.env.secret, { expiresIn: '3d' })
  return token
}

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (hashedPassword, nextPassword) => bcrypt.compareSync(nextPassword, hashedPassword)

export {
  isValidEmail,
  validatePassword,
  isEmpty,
  empty,
  generateUserToken,
  hashPassword,
  comparePassword,
}
