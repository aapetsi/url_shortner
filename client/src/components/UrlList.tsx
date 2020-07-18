import React, { FunctionComponent } from 'react'
import Url from './Url'
import '../styles/UrlList.css'

export type UrlListProps = {
  urls :  {
    _id: string,
    shortUrl: string,
    originalUrl: string,
    shortUrlHash: string
  }[]
}

const UrlList : FunctionComponent<UrlListProps> = ({urls}) => {
  return (
    <div>
      {urls.length === 0 ? (
        <p data-testid="no-urls">Start shortening your urls</p>
      ) : (
        <p data-testid='urls-all'>Here are your shortened urls</p>
      )}
      {urls.map((url) => (
        <Url
          key={url._id}
          shortUrl={url.shortUrl}
          id={url._id}
          originalUrl={url.originalUrl}
          shortUrlHash={url.shortUrlHash}
        />
      ))}
    </div>
  )
}

export default UrlList
