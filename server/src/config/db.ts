import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

declare var process : {
  env: {
    MONGO_HOSTNAME : string
    MONGO_DB: string
    MONGO_DB_TEST: string
    MONGO_PORT: number
  },
  exit : (val : number) => any
}

interface MongoVariables {
  MONGO_HOSTNAME : string
  MONGO_DB: string
  MONGO_DB_TEST: string
  MONGO_PORT: number
}

// const { MONGO_HOSTNAME, MONGO_DB, MONGO_DB_TEST, MONGO_PORT } = process.env

const mongoVariables : MongoVariables = process.env

const mongoUrl : string = 'mongodb://mongo:27017/url_shortner'

const connectDB = async () => {
  try {
    const dbConnectionUrl = {
      localUrl: `mongodb://${mongoVariables.MONGO_HOSTNAME}:${mongoVariables.MONGO_PORT}/${
        mongoVariables.MONGO_DB ? mongoVariables.MONGO_DB : mongoVariables.MONGO_DB_TEST
      }`,
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

export default connectDB
