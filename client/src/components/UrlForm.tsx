import React, { useState, FunctionComponent, FormEvent, SyntheticEvent } from 'react'
import '../styles/UrlForm.css'

type UrlFormProps = {
  shortenUrl: (url: string) => void
}

const UrlForm : FunctionComponent<UrlFormProps> = ({shortenUrl}) => {
  const [text, setText] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
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
