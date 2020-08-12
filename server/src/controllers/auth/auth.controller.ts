import {Request, Response} from 'express'
import User from 'src/models/User.model'

export const login = async (req: Request, res: Response) => {
  res.send('login route')
}

export const register = (req: Request, res: Response) => {
  res.send('register route')
}