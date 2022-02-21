const Blog = require('../models/blog')

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
  return blogs.map(blog => blog.toJson())
}

module.exports = {
  initialState,
  blogsInDB,
}