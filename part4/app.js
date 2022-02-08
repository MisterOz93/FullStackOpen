const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')

logger.info('Connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI).then(
  () => {
    logger.info('Connected to MongoDB')
  }
).catch((error) => {
  logger.error('Error connecting to MongoDB', error.message)
})
app.use(express.json())
app.use('/api/blogs', blogsRouter)
app.use(cors())
app.use(morgan('tiny'))

/* app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})
*/
module.exports = app