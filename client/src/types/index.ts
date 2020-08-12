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

export type UrlsType = Urls[]

