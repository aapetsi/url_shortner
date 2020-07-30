import {Request, Response} from 'express'
import User from '../../models/User.model'

const registerUser = async (req: Request, res: Response) => {
  const {email} = req.params
  try {
    const foundUser = User.findOne({email})
    if (foundUser) {
      return res.status(400).json({message: 'User already exists'})
    }
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
}

const loginUser = async (req: Request, res: Response) : Promise<void> => {
  res.send('login')
}

export {loginUser, registerUser}