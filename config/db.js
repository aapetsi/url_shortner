const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env //.MONGO_URI || 'mongodb://localhost:27017/shortner'

const connectDB = async () => {
  try {
    const dbConnectionUrl = {
      localUrl: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
    }
    await mongoose.connect(dbConnectionUrl.localUrl, {
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
