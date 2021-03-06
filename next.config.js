const content = require('./content/data.json')

module.exports = {
  async exportPathMap() {
    const contentPathMap = content.reduce(
      (mappers, item) => ({
        ...mappers,
        [item.url]: { page: '/generic', query: { id: item.id } },
      }),
      {},
    )
    console.log(contentPathMap)
    return {
      '/': { page: '/' },
      ...contentPathMap,
    }
  },
}
