import Url from '../../models/Url.model'
import { Request, Response } from 'express'
import {v4 as uuidv4} from 'uuid'
import verifyUrl from '../../helpers/verifyUrl'

const getUrls = async (req: Request, res: Response) => {
  const urls = await Url.find({user_id: req.user._id})

  return res.status(200).json(urls)
}

const openLink = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const url = await Url.findById(id)

    if (!url) {
      return res.status(404).json({message: 'Url not found'})
    }

    return res.status(200).redirect(url.originalUrl)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const createShortLink = async (req: Request, res: Response) => {
  const { originalUrl } = req.body

  if (!originalUrl) {
    return res.status(400).json({ message: 'Please provide a valid url' })
  }

  if (!verifyUrl(originalUrl)) {
    return res.status(400).json({message: 'Url is not in a valid format'})
  }

  try {
    const existingUrl = await Url.findOne({ originalUrl, user_id: req.user._id })
    if (existingUrl) {
      return res.status(400).json({ error: 'Url has already been saved' })
    } else {
      const hash = uuidv4().split('-')[4].slice(0, 8)
      const user_id = req.user._id
      console.log(req.user._id)
      const shortenedLink = new Url({
        user_id,
        originalUrl,
        shortUrl: `https://pbid.io/${hash}`,
        shortUrlHash: hash
      })
      const savedLink = await shortenedLink.save()

      res.status(201).json(savedLink)
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteLink = async (req: Request, res: Response) => {
  const { id } = req.params
  const { _id } = req.user
  try {
    const url = await Url.findById(id)
    if (!url) {
      return res.status(404).json({message: 'No such url exists'})
    }
    await Url.deleteOne({ _id: id})
    return res.status(200).json({message: 'Url has been deleted'})
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

const deleteAll = async (req: Request, res: Response) => {
  try {
    await Url.deleteMany({})
    return res.status(200).json({message: 'Urls have been deleted'})
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export { getUrls, createShortLink, deleteLink, deleteAll, openLink }