import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UrlList from './UrlList'
import UrlForm from './UrlForm'

const App = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/url/get_urls')
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [urls])
  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlForm />
      <UrlList urls={urls} />
    </div>
  )
}

export default App
