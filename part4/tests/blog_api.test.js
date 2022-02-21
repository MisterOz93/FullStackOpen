const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)


beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(helper.initialState[0])
  await blogObject.save()
  blogObject = new Blog(helper.initialState[1])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are two blogs', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialState.length)
})

test('the first blog is called: How to blog', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].title).toBe('How to blog')
})

test('a new blog can be added', async () => {
  const newBlog = {
    title: 'Blogging off',
    author: 'Foo McFooson',
    url: 'McFoosonblog.com',
    likes: 1
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-type', /application\/json/)

  const response = await api.get('/api/blogs')
  const authors = response.body.map(r => r.author)
  expect(response.body).toHaveLength(helper.initialState.length + 1)
  expect(authors).toContain('Foo McFooson')
})

afterAll(() => {
  mongoose.connection.close()
})