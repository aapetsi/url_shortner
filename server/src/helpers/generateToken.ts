import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { IUserDocument } from '../types'

dotenv.config()

declare var process : {
  env: {
    JWT_SECRET : string
  }
}

export default  (user: IUserDocument) => {
  const payload = {
    sub: user._id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  const result = jwt.sign(payload, process.env.JWT_SECRET, options)

  return result
}