const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialState = [
  {
    title:'How to blog',
    author:'Bloggert McBlogface',
    url:'www.blog.com',
    likes: 1
  },
  {
    title:'Every movie that ever existed',
    author: 'Humphrey Bloggart',
    url: 'www.casablog.ca',
    likes: 1500000,
  }
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialState[0])
  await blogObject.save()
  blogObject = new Blog(initialState[1])
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
  expect(response.body).toHaveLength(initialState.length)
})

test('the first blog is called: How to blog', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].title).toBe('How to blog')
})

afterAll(() => {
  mongoose.connection.close()
})