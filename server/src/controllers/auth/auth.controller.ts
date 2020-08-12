import {Request, Response} from 'express'
import User from '../../models/User.model'

export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email})
    res.send(user)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const register = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}