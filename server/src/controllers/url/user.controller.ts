import {Request, Response} from 'express'
import User from '../../models/User.model'

const registerUser = async (req: Request, res: Response) : Promise<void> => {
  res.send('regiser')
}

const loginUser = async (req: Request, res: Response) : Promise<void> => {
  res.send('login')
}

export {loginUser, registerUser}