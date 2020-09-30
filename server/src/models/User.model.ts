import mongoose from 'mongoose'
import { IUserDocument } from 'src/types'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const user = mongoose.model<IUserDocument>('user', userSchema)

export default user