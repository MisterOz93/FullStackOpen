const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./utils/config')
const Blog = require('./models/blog')
const logger = require('./utils/logger')

mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.get('/api/blogs', (request, response) => {
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

module.exports = app