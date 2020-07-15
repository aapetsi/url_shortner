import React from 'react'

const Url = (props) => {
  const { id, originalUrl, shortUrl } = props

  return (
    <div>
      <span>{shortUrl}</span>

      {/* <button>Edit</button>
      <button>Delete</button> */}
    </div>
  )
}

export default Url
