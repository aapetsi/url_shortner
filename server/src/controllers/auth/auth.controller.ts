import { Request, Response } from 'express'
import User from '../../models/User.model'
import validateLoginInput from '../../middleware/validateLoginInput'
import validateRegisterInput from '../../middleware/validateRegisterInput'

export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body
  const {errors, isValid} = validateLoginInput({email, password})
  
  try {
    const user = await User.findOne({email})
    // implement user authentication here
    res.send(user)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const register = async (req: Request, res: Response) => {
  const {username, email, password} = req.body
  const {errors, isValid} = validateRegisterInput({ email, username, password })

  try {
    const foundUser = await User.findOne({ email })
    if (foundUser) {
      return res.status(400).json({message: 'User already exists'})
    }
    const newUser = new User({
      username,
      email,
      password
    })
    // replace password with bcrypt
    const savedUser = await newUser.save()
    return res.status(201).json({savedUser})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}