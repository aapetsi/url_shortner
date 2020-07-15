import React from 'react'
import Url from './Url'

const UrlList = (props) => {
  const { urls } = props
  return (
    <div>
      {urls.map((url) => (
        <Url key={url._id} shortUrl={url.shortUrl} />
      ))}
    </div>
  )
}

export default UrlList
