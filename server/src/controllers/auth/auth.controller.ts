import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import User from '../../models/User.model'
import validateLoginInput from '../../middleware/validateLoginInput'
import validateRegisterInput from '../../middleware/validateRegisterInput'
import generateToken from '../../helpers/generateToken'

export const login = async (req: Request, res: Response) => {
  const {email, password} = req.body
  const {errors, isValid} = validateLoginInput({email, password})

  if (!isValid) return res.status(400).json(errors)
  
  try {
    const user = await User.findOne({ email })
    
    if (!user) return res.status(404).json({message: 'User not found'})
    
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)
      return res.status(200).json({
        user: {
          _id: user._id, 
          email: user.email, 
          username: user.username,
        },
        token
      })
    } else {
      return res.status(401).json({message: 'Invalid credentials'})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const register = async (req: Request, res: Response) => {
  const {username, email, password, password2} = req.body
  const {errors, isValid} = validateRegisterInput({ email, username, password, password2 })

  if (!isValid) return res.status(400).json(errors)
  
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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.password, salt);
    
    newUser.password = hash
    
    const savedUser = await newUser.save()

    const token = generateToken(newUser)

    return res.status(201).json({
      user: {
        _id: savedUser._id, 
        email: savedUser.email, 
        username: savedUser.username
      },
      token
    })
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}