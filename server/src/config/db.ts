import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {MongoVariables} from '../types'

dotenv.config()

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
    let db = process.env.NODE_ENV === 'development' ? MONGO_DB : MONGO_DB_TEST
    const dbConnectionUrl = {
      localUrl: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${db}`,
    }
    await mongoose.connect(dbConnectionUrl.localUrl, {
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
