const Url = require('../../models/Url.model')

const baseUrl = process.env.BASE_URL || 'http://localhost:1234'

const createShortLink = async (req, res) => {
  const { originalUrl } = req.body

  try {
    // check if url has already been saved
    const existingUrl = await Url.findOne({ originalUrl })
    if (existingUrl) {
      return res.status(400).json({ error: 'Url has already been saved' })
    } else {
      /*
      implement url shortening here and save to database
      */
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const openLink = async (req, res) => {
  const { url } = req.params
  try {
    const foundUrl = await Url.findOne({ shortUrl })
    if (!foundUrl) {
      return res.status(404).json({ message: 'Url not found' })
    } else {
      return res.redirect(foundUrl.originalUrl)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createShortLink,
  openLink,
}
