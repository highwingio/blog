const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const compareDesc = require('date-fns/compare_desc')

const deserialize = parsed => ({ ...parsed.attributes, body: parsed.body })

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
      const parsed = deserialize(frontMatter(source))
      files = [...files, ...[{ id, pathname, ...parsed }]]
    }
  })
  return files
}

const posts = getPosts('posts').sort((a, b) => compareDesc(a.date, b.date))

const file = `${path.join(__dirname, 'posts')}/data.json`
console.log(posts)
fs.writeFileSync(file, JSON.stringify(posts))
