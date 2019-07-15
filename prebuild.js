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
      const pathname = `/${dirname}/${path.basename(filename, '.md')}`
      const id = pathname.replace(/\//, '').replace(/\//g, '-')
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8')
      files = [...files, ...[{ id, pathname, source }]]
    }
  })
  return files
}

const posts = getPosts('posts')
const file = `${path.join(__dirname, 'posts')}/data.json`
fs.writeFileSync(file, JSON.stringify(posts))
