import mongoose from 'mongoose'
import {IUrlDocument} from 'src/types'

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  shortUrlHash: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

const url = mongoose.model<IUrlDocument>('url', urlSchema)

export default url
