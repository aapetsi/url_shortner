import express from 'express'
import path from 'path'
import cors from 'cors'
import urlRouter from './routes/api/url'

import connectDB from './config/db'
const buildPath = path.join(__dirname, 'client', 'build')

const app = express()

// Connect Database
connectDB()

// app middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(buildPath))

// cors middleware
app.use(cors())

// Routes middleware
app.use('/api/url', urlRouter)

// send frontend react app
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'))
// })

export default app
