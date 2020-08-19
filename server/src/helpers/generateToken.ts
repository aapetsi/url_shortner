import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { IUserDocument, ITokenData, DataStoredInToken } from '../types'

dotenv.config()

declare var process : {
  env: {
    JWT_SECRET : string
  }
}

export default  (user: IUserDocument): ITokenData => {
  const payload : DataStoredInToken = {
    id: user._id,
    username: user.username
  }

  const options = {
    expiresIn: 24 * 60 * 60
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, options)

  return {
    expiresIn: options.expiresIn,
    token
  }
}