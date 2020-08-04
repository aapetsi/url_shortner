export interface Url {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string,
  handleDelete: (id: string) => void
}

