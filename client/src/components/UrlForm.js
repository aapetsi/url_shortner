import React, { useState } from 'react'

const UrlForm = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' required={true} onChange={handleChange} name='url' />
        <button>Shorten</button>
      </form>
    </div>
  )
}

export default UrlForm
