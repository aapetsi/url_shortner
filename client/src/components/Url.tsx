import React, {FunctionComponent, } from 'react'

export type UrlProps =  {
  shortUrl: string,
  id: string,
  originalUrl: string,
  shortUrlHash: string,
  handleDelete(url: string): void
}

const Url: FunctionComponent<UrlProps> = ({ id, originalUrl, shortUrl, handleDelete }) => {

  const handleDeleteUrl = () => {
    handleDelete(id)
  }

  return (
      <tr className="link">
      <td>
        {originalUrl}
      </td>
      <td data-testid="url-short">
        {shortUrl}<button className='copy-clipboard'>copy</button>
      </td>
      <td>
        <button className='delete-one' onClick={handleDeleteUrl} data-testid='delete-one'>Delete</button>
      </td>
    </tr>
  )
}

export default Url
