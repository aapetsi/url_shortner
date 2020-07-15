import React from 'react'

const Url = (props) => {
  const { id, originalUrl, shortUrl } = props
  console.log(props)
  return (
    <div>
      <p>https://pbid.io/{shortUrl}</p>
    </div>
  )
}

export default Url
