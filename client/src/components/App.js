import React from 'react'
import UrlList from './UrlList'
import UrlForm from './UrlForm'

const App = () => {
  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlForm />
      <UrlList />
    </div>
  )
}

export default App
