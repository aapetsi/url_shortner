import React, {FunctionComponent} from 'react'
import Axios from 'axios'

export type UrlProps =  {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string
}

const Url: FunctionComponent<UrlProps> = ({id, originalUrl, shortUrl, shortUrlHash}) => {

  const handleOpenLink = () => {
    window.open(originalUrl, '_blank')
  }

  return (
    <tr className="link">
      <td>
        {originalUrl}
      </td>
      <td data-testid="url-short">
        {shortUrl}
      </td>
    </tr>
  )
}

export default Url
