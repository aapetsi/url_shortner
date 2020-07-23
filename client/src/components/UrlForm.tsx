import React, { useState, FunctionComponent, FormEvent, SyntheticEvent } from 'react'
import '../styles/UrlForm.css'

export type UrlFormProps = {
  shortenUrl: (url: string) => void
}

const UrlForm : FunctionComponent<UrlFormProps> = ({shortenUrl}) => {
  const [text, setText] = useState('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.slice(0,4) === 'http') {
      shortenUrl(text)
      setText('')
    } else {
      alert('Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"')
      setText('')
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="url-form">
        <input
          type='text'
          required={true}
          onChange={handleChange}
          name='text'
          placeholder='https://example.com or www.example.com'
          value={text}
          data-testid='url'
        />
        <button data-testid="submit">Shorten</button>
      </form>
    </div>
  )
}

export default UrlForm
