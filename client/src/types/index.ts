export interface Url {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string,
  handleDelete: (id: string) => void
}

interface Urls {
  _id: string,
  originalUrl: string,
  shortUrl: string,
  shortUrlHash: string,
  dateCreated: Date
__v: number
}

export interface UserState {
  user: {},
  errors: {},
  token: {},
  isLoggedIn: boolean,
}

export type UrlsType = Urls[]

