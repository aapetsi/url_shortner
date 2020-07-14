const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const urlRouter = require('./routes/api/url')

const app = express()

// Connect Database
connectDB()

// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cors middleware
app.use(cors())

// Routes middleware
app.use('/api/url', urlRouter)

module.exports = app
