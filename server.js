const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = app
