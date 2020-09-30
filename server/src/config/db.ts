import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { MongoVariables } from '../types'

declare var process : {
  env: {
    MONGO_HOSTNAME : string
    MONGO_DB: string
    MONGO_DB_TEST: string
    MONGO_PORT: number,
    NODE_ENV: string
  },
  exit : (val : number) => any
}

const {MONGO_DB, MONGO_DB_TEST, MONGO_HOSTNAME, MONGO_PORT} : MongoVariables = process.env

const connectDB = async () => {
  try {
    const db = process.env.NODE_ENV === 'development' ? MONGO_DB : MONGO_DB_TEST
    const dbConnectionUrl = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${db}`

    await mongoose.connect(dbConnectionUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    // tslint:disable-next-line:no-console
    console.log('MonogDB connected successfully')
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error.message)
    process.exit(1)
  }
}

// module.exports = connectDB
export default connectDB
