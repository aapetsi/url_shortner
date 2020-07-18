import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UrlList from './UrlList'
import UrlForm from './UrlForm'
import '../styles/App.css'

const App = () => {
  const [urls, setUrls] = useState<Array<{_id: string, shortUrl: string, originalUrl: string, shortUrlHash: string}>>([])

  const shortenUrl = (originalUrl: string) => {
    Axios
      .post('http://localhost:3000/api/url/createShortLink', { originalUrl })
      .then((res) => {
        setUrls([...urls, res.data])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(() => {
    Axios
      .get('http://localhost:3000/api/url/get_urls')
      .then((res) => {
        setUrls([...urls, ...res.data])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  
  return (
    <div className='container'>
      <h1>URL Shortener</h1>
      <UrlForm shortenUrl={shortenUrl} />
      <UrlList urls={urls} />
    </div>
  )
}

export default App
