import React, {FunctionComponent} from 'react'
import Axios from 'axios'

export type UrlProps =  {
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
    <div data-testid="url">
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
