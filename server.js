const express = require('express')
const connectDB = require('./config/db')
const urlRouter = require('./routes/api/url')

const app = express()

// Connect Database
connectDB()

// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes middleware
app.use('/api/url', urlRouter)

module.exports = app
