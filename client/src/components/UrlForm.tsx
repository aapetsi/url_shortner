import React, { useState, FunctionComponent, FormEvent, SyntheticEvent } from 'react'

export type UrlFormProps = {
  shortenUrl: (url: string) => void
}

const UrlForm : FunctionComponent<UrlFormProps> = ({shortenUrl}) => {
  const [text, setText] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const httpRegex = /^https?:\/\/[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
    const wwwRegex = /^www\.[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
    if (httpRegex.test(text) || wwwRegex.test(text)) {
      shortenUrl(text)
      setText('')
      setError('')
    } else {
      setError('Make sure your url is of the form "https://somewebsite.com" or "www.somewebiste.com"')
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
          placeholder='https://example.com'
          value={text}
          data-testid='url'
        />
        <button data-testid="submit">Shorten</button>
      </form>
      {error && <p data-testid="error-text">{error}</p>}
    </div>
  )
}

export default UrlForm
