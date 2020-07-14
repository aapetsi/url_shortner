import React from 'react'
import Url from './Url'

const UrlList = (props) => {
  const { urls } = props
  return (
    <div>
      {urls.map((url) => (
        <Url key={url.id} shortUrl={url.shortUrl} />
      ))}
      <Url />
    </div>
  )
}

export default UrlList
