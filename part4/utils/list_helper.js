const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  } ]




const dummy = (blogs) => { 
  return 1 //for now
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  return likes.length > 0 ? likes.reduce((prev, curr) => prev + curr) : 0
}

const favoriteBlog = (blogs) => {
  let favorite = blogs[0]
  for (let i = 1; i < blogs.length; i++){
    if (blogs[i].likes > favorite.likes){
      favorite = blogs[i]
    }
  }
  return favorite ? {title: favorite.title, author: favorite.author, likes: favorite.likes} : []
}

const mostBlogs = (blogs) => { 
  if (blogs.length < 1 ){ return []}
  const blogsByAuthor = {}
  const authors = blogs.map(blog => blog.author)
  for (const author of authors) {
    blogsByAuthor[author] = blogsByAuthor[author] ? blogsByAuthor[author] + 1 : 1
  }
  const mostPopular = Object.keys(blogsByAuthor).reduce( (a, b) => blogsByAuthor[a] > blogsByAuthor[b] ? a : b)
  return {
    author: mostPopular, 
    blogs: blogsByAuthor[mostPopular]}
}

const mostLikes = (blogs) => {
  if (blogs.length < 1) return []
  const likesByAuthor = {}
  blogs.forEach(blog => {
    likesByAuthor[blog.author] ? likesByAuthor[blog.author] += blog.likes : likesByAuthor[blog.author] = blog.likes
  })
  const mostLiked = Object.keys(likesByAuthor).reduce( (a, b) => likesByAuthor[a] > likesByAuthor[b] ? a : b)
  return {
    author: mostLiked,
    likes: likesByAuthor[mostLiked]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
