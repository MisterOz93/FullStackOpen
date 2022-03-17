const Blog = require('../models/blog')
const User = require('../models/user')

const initialState = [
  {
    title:'How to blog',
    author:'Bloggert McBlogface',
    url:'www.blog.com',
    likes: 123
  },
  {
    title:'Every movie that ever existed',
    author: 'Humphrey Bloggart',
    url: 'www.casablog.ca',
    likes: 150000051,
  }
]

const blogsInDB = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDB = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  initialState,
  blogsInDB,
  usersInDB,
}