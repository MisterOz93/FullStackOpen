const dummy = (blogs) => { 
  return 1 //for now
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  return likes.length > 0 ? likes.reduce((prev, curr) => prev + curr) : 0
}

module.exports = {
  dummy,
  totalLikes
}
