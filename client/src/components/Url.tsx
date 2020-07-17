import React, {FunctionComponent} from 'react'
import Axios from 'axios'

type UrlProps = {
  key: string,
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string
}

const Url: FunctionComponent<UrlProps> = ({id, originalUrl, shortUrl, shortUrlHash, key}) => {

  const handleOpenLink = () => {
    window.open(originalUrl, '_blank')
  }

  return (
    <div>
      <p
        className='link'
        onClick={handleOpenLink}
      >
        {shortUrl}
      </p>
    </div>
  )
}

export default Url
