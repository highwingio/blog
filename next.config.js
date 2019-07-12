const fs = require('fs')
const path = require('path')

const getPosts = (dirname, files = []) => {
  const dir = path.join(process.cwd(), dirname)
  fs.readdirSync(dir).forEach(filename => {
    const fileStat = fs.statSync(path.join(dir, filename))
    if (fileStat.isDirectory()) {
      const nestedFiles = getPosts(`${dirname}/${filename}`, files)
      files = [...nestedFiles]
    }
    if (fileStat.isFile() && path.extname(filename) === '.md') {
      const id = `/${dirname}/${filename}`
      const pathname = `/${dirname}/${path.basename(filename, '.md')}`
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8')
      files = [...files, ...[{ id, pathname, source }]]
    }
  })
  return files
}

module.exports = {
  async exportPathMap() {
    const posts = getPosts('posts')
    const postPathMap = {}
    posts.forEach(post => {
      postPathMap[post.pathname] = {
        page: '/post',
        query: {
          source: post.source,
        },
      }
    })
    return {
      '/': {
        page: '/',
        query: { posts },
      },
      ...postPathMap,
      '/404.html': { page: '_error' },
    }
  },
}
