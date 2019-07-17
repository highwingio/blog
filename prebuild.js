const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const compareDesc = require('date-fns/compare_desc')

const output = `${path.join(__dirname, 'content')}/data.json`

const deserialize = parsed => ({ ...parsed.attributes, body: parsed.body })

const getContent = (dirname, files = []) => {
  const dir = path.join(process.cwd(), dirname)
  fs.readdirSync(dir).forEach(filename => {
    const fileStat = fs.statSync(path.join(dir, filename))
    if (fileStat.isDirectory()) {
      const nestedFiles = getContent(`${dirname}/${filename}`, files)
      files = [...nestedFiles]
    }
    if (fileStat.isFile() && path.extname(filename) === '.md') {
      const fname = path.basename(filename, '.md')
      const pathname = `/${dirname}/${fname}`.replace(/^\/content/, '')
      const id = pathname.replace(/\//, '').replace(/\//g, '-')
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const parsed = deserialize(frontMatter(source))
      files = [...files, ...[{ id, pathname, ...parsed }]]
    }
  })
  return files
}

const content = getContent('content').sort((a, b) =>
  compareDesc(a.date, b.date),
)

// console.log(content)
fs.writeFileSync(output, JSON.stringify(content))
