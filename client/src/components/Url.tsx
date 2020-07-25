import React, {FunctionComponent, } from 'react'

export type UrlProps =  {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string,
  handleDelete(url: string): void
}

const Url: FunctionComponent<UrlProps> = ({ originalUrl, shortUrl, handleDelete }) => {

  const handleDeleteUrl = () => {
    handleDelete(shortUrl)
  }

  return (
      <tr className="link">
      <td>
        {originalUrl}
      </td>
      <td data-testid="url-short">
        {shortUrl}
      </td>
      <td>
        <button className='delete-one' onClick={handleDeleteUrl}>Delete</button>
      </td>
    </tr>
  )
}

export default Url
