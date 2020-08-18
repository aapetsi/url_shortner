import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { IRequest } from 'src/types'

declare var process : {
  env: {
    JWT_SECRET: string
  }
}

export default (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken: any) => {
      if (err) {
        res.status(401).json({message: err.message})
      } else {
        req.decodedToken = decodedToken
      }
    })
  } else {
    res.status(400).json({message: 'No credentials provided'})
  }
}