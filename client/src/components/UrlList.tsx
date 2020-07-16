import React from 'react'
import Url from './Url'
import '../styles/UrlList.css'

const UrlList = (props) => {
  const { urls } = props
  return (
    <div>
      {urls.length === 0 ? (
        <p>Start shortening your urls</p>
      ) : (
        <p>Here are your shortened urls</p>
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
