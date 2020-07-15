const Url = require('../../models/Url.model')

const baseUrl = process.env.BASE_URL || 'http://localhost:1234'

const getUrls = async (req, res) => {
  const urls = await Url.find()
  return res.status(200).json(urls)
}

const createShortLink = async (req, res) => {
  const { originalUrl } = req.body

  try {
    // check if url has already been saved
    const existingUrl = await Url.findOne({ originalUrl })
    if (existingUrl) {
      return res.status(400).json({ error: 'Url has already been saved' })
    } else {
      // Shorten and save url to database
      const shortenedLink = new Url({
        originalUrl,
      })
      shortenedLink.shortUrl = `https://pbid.io/${shortenedLink.id.slice(
        13,
        21
      )}`

      const savedLink = await shortenedLink.save()

      res.status(201).json(savedLink)
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
  getUrls,
  createShortLink,
  openLink,
}
