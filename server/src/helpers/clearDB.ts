import User from '../models/User.model'
import Url from '../models/Url.model'

export default async () => {
  await Url.deleteMany({})
  await User.deleteMany({})
}