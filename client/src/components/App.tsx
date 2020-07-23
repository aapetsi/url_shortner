import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UrlList from './UrlList'
import UrlForm from './UrlForm'
import '../styles/App.css'

const App = () => {
  const [urls, setUrls] = useState<Array<{_id: string, shortUrl: string, originalUrl: string, shortUrlHash: string}>>([])
  const [error, setError] = useState<string>('')

  const shortenUrl = (originalUrl: string) => {
    Axios
      .post('http://localhost:3000/api/url/createShortLink', { originalUrl })
      .then((res) => {
        setUrls([...urls, res.data])
        setError('')
      })
      .catch((err) => {
        setError('There was a problem saving your URL to the database. Check your connection and try again')
      })
  }

  const fetchUrls = async () : Promise<void> => {
    const res = await Axios.get('http://localhost:3000/api/url/get_urls')
    if (res.status === 200 || res.statusText === '  OK') {
      setUrls([...urls, res.data])
    } else {
      setError('Oops there seems to be a problem with the network.\n Check your connection and try again')
    }
  }

  useEffect(() => { 
    // const res = fetchUrls()
    Axios
      .get('http://localhost:3000/api/url/get_urls')
      .then((res) => {
        setUrls([...urls, ...res.data])
        setError('')
      })
      .catch((err) => {
        setError('Oops there seems to be a problem with the network. Check your connection and try again')
      })
  }, [])
  
  return (
    <div className='container'>
      <h1>URL Shortener</h1>
      <UrlForm shortenUrl={shortenUrl} />
      <UrlList urls={urls} error={error} />
    </div>
  )
}

export default App