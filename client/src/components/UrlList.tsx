import React, { FunctionComponent } from 'react'
import Url from './Url'
import '../styles/UrlList.css'

export type UrlListProps = {
  urls :  {
    _id: string,
    shortUrl: string,
    originalUrl: string,
    shortUrlHash: string
  }[],
  error: string,
  handleDelete(url: string): void
}

const UrlList : FunctionComponent<UrlListProps> = ({urls, error, handleDelete}) => {
  return (
    <div>
      {urls.length === 0 ? <p data-testid="no-urls">Start shortening your urls</p> : <p data-testid="urls-all">Here are your shortened urls</p>}
      {error !== '' && <p data-testid="error">{error}</p>}
     
      <table>
        <thead>
          <tr>
            <td>Original Url</td>
            <td>Shortened Url</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <Url
            key={url._id}
            shortUrl={url.shortUrl}
            id={url._id}
            originalUrl={url.originalUrl}
            shortUrlHash={url.shortUrlHash}
            handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UrlList
