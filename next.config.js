const posts = require('./posts/data.json')

module.exports = {
  async exportPathMap() {
    const postPathMap = posts.reduce(
      (mappers, post) => ({
        ...mappers,
        [post.pathname]: { page: '/post', query: { id: post.id } },
      }),
      {},
    )
    return {
      '/': { page: '/' },
      ...postPathMap,
    }
  },
}
