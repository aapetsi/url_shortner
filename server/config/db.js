const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { MONGO_HOSTNAME, MONGO_DB, MONGO_DB_TEST, MONGO_PORT } = process.env

const mongoUrl = 'mongodb://mongo:27017/url_shortner'
const connectDB = async () => {
  try {
    const dbConnectionUrl = {
      localUrl: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${
        MONGO_DB ? MONGO_DB : MONGO_DB_TEST
      }`,
    }
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    console.log('MonogDB connected successfully')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB