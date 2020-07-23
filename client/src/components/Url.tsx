import React, {FunctionComponent, } from 'react'

export type UrlProps =  {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string
}

const Url: FunctionComponent<UrlProps> = ({ originalUrl, shortUrl }) => {

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
