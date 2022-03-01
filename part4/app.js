const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('express-async-errors')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

logger.info('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI).then(
  () => {
    logger.info('Connected to MongoDB')
  }
).catch((error) => {
  logger.error('Error connecting to MongoDB', error.message)
})

app.use(express.json())
//app.use(express.static('build')) //not built yet
app.use('/api/blogs', blogsRouter)
app.use(cors())
app.use(middleware.errorHandler)
app.use(morgan('tiny'))

module.exports = app