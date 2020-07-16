import React, { useState } from 'react'
import '../styles/UrlForm.css'

const UrlForm = (props) => {
  const [text, setText] = useState('')
  const { shortenUrl } = props

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    shortenUrl(text)
    setText('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          required={true}
          onChange={handleChange}
          name='url'
          placeholder='https://example.com'
          value={text}
        />
        <button>Shorten</button>
      </form>
    </div>
  )
}

export default UrlForm
