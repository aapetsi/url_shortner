import { AxiosResponse } from 'axios'

const savedUrls = [
  {
    _id: '5f0f27668c56460f6124a594',
    originalUrl: 'google.com',
    shortUrl: 'https://pbid.io/b453aa87',
    shortUrlHash: 'b453aa87',
    dateCreated: '2020-07-15T15:57:26.820Z',
    __v: 0,
  },
  {
    _id: '5f0f2c30bd4cc61091594b25',
    originalUrl: 'https://facebook.com',
    shortUrl: 'https://pbid.io/dfc123ee',
    shortUrlHash: 'dfc123ee',
    dateCreated: '2020-07-15T16:17:52.097Z',
    __v: 0,
  },
  {
    _id: '5f0f2ca604e92210c4587406',
    originalUrl: 'https://instagram.com',
    shortUrl: 'https://pbid.io/98c3d6ef',
    shortUrlHash: '98c3d6ef',
    dateCreated: '2020-07-15T16:19:50.655Z',
    __v: 0,
  },
]

const axiosResponse: AxiosResponse = {
  data: savedUrls,
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
}

export default {
  default: {
    get: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse))
  },
  get: jest.fn(() => Promise.resolve(axiosResponse))
}
