const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})
  
blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)  
  await blog.save()
  response.status(201).json()
})

blogsRouter.put('/:id', async (request, response) => {
  const updatedBlog = request.body
  await Blog.findByIdAndUpdate(request.params.id, updatedBlog, { new: true})
  response.json(updatedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).json()
})
module.exports = blogsRouter