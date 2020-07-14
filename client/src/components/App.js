import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UrlList from './UrlList'
import UrlForm from './UrlForm'

const App = () => {
  const [urls, setUrls] = useState([])

  useEffect(() => {}, [urls])
  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlForm />
      <UrlList urls={urls} />
    </div>
  )
}

export default App
