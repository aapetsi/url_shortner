import express, {Request, Response} from 'express'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import urlRouter from './routes/api/url'
import authRouter from './routes/api/auth'
import connectDB from './config/db'

const buildPath = path.join(__dirname, 'client', 'build')

const app = express()

// Connect Database
connectDB()

// express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(buildPath))

// cors middleware
app.use(cors())

// helmet middleware
app.use(helmet())

// morgan middleware
app.use(morgan('tiny'))

// Routes middleware
app.use('/api/url', urlRouter)
app.use('/api/auth', authRouter)

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({ message: 'This URL can not be found' })
})

// send frontend react app
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'))
// })

export default app
