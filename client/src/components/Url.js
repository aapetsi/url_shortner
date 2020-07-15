import React from 'react'
import Axios from 'axios'

const Url = (props) => {
  const { id, originalUrl, shortUrl, shortUrlHash } = props

  const handleOpenLink = () => {
    window.open(originalUrl, '_blank')
  }

  return (
    <div>
      <p
        className='link'
        onClick={handleOpenLink}
        href={originalUrl}
        target='_blank'
      >
        {shortUrl}
      </p>

      {/* <button>Edit</button>
      <button>Delete</button> */}
    </div>
  )
}

export default Url

// const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) =>
//   shouldOpenNewTab ? window.open(url, '_blank') : (window.location.href = url)
