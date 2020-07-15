import React from 'react'

const Url = (props) => {
  const { id, originalUrl, shortUrl } = props

  return (
    <div>
      <p>{shortUrl}</p>
    </div>
  )
}

export default Url
