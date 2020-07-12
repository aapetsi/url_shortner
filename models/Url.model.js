const mongoose = require('mongoose')
const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  uniqueName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

const Url = mongoose.model('url', UrlSchema)

module.exports = Url
