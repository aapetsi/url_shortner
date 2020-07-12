const express = require('express')
const connectDB = require('./config/db')
const urlController = require('./controllers/url/url.controller')

const app = express()

// Connect Database
connectDB()

// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Controllers
// routes
app.post('/createShortLink', urlController.createShortLink)

app.get('/:url', urlController.openLink)

module.exports = app
