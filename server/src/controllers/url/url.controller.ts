import Url from '../../models/Url.model'
import { Request, Response } from 'express'
import {v4 as uuidv4} from 'uuid'

const baseUrl = process.env.BASE_URL || 'http://localhost:1234'

const getUrls = async (req: Request, res: Response) => {
  const urls = await Url.find()
  return res.status(200).json(urls)
}

const createShortLink = async (req: Request, res: Response) => {
  const { originalUrl } = req.body

  if (!originalUrl) {
    return res.status(400).json({ message: 'Please provide a valid url' })
  }

  try {
    // check if url has already been saved
    const existingUrl = await Url.findOne({ originalUrl })
    if (existingUrl) {
      return res.status(400).json({ error: 'Url has already been saved' })
    } else {
      // Shorten and save url to database
      const hash = uuidv4().split('-')[4].slice(0, 8)
      const shortenedLink = new Url({
        originalUrl,
        shortUrl: `https://pbid.io/${hash}`,
        shortUrlHash: hash,
      })

      const savedLink = await shortenedLink.save()

      res.status(201).json(savedLink)
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export {getUrls, createShortLink}