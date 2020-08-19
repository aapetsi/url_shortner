import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.model'
import * as Types from 'src/types'

declare var process : {
  env: {
    JWT_SECRET: string
  }
}

const authenticateMiddleware =  async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
  if (token) {
    const secret = process.env.JWT_SECRET
    try {
      const verificationResoponse = jwt.verify(token, secret) as Types.DataStoredInToken
      const user = await User.findById(verificationResoponse.id)
      if (user) {
        req.user = user
        next()
      } else {
        return res.status(400).json({message: 'No credentials provided'})
      }
    } catch (error) {
      return res.status(401).json({message: error.message})
    }
  } else {
    return res.status(400).json({message: 'No credentials provided'})
  }
}

export default authenticateMiddleware