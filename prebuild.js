#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const parseAsDate = require('date-fns/parse')
const compareDesc = require('date-fns/compare_desc')
const Feed = require('feed').Feed
const pkg = require('./package.json')

// -------------------------------------
// Generate the data.json from ./content

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
      const url = `/${dirname}/${fname}`.replace(/^\/content/, '')
      const id = url.replace(/\//, '').replace(/\//g, '-')
      const source = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const parsed = deserialize(frontMatter(source))
      const isPost =
        parsed.date != null &&
        parsed.date.toLowerCase() !== 'draft' &&
        /^posts/.test(id)
      files = [...files, ...[{ id, url, ...parsed, isPost }]]
    }
  })
  return files
}

const data = getContent('content').sort((a, b) => compareDesc(a.date, b.date))

// console.log(data)
fs.writeFileSync(output, JSON.stringify(data))

// -------------------------------------
// Generate rss feed from posts (only run in production env?)

const rssPosts = data.filter(f => f.isPost === true)

const rssFeed = new Feed({
  author: pkg.author,
  copyright: `© ${new Date().getFullYear()} Imagine Analytics`,
  description: pkg.description,
  favicon: `${pkg.homepage}/favicon.ico`,
  feedLinks: {
    json: `${pkg.homepage}/json`,
    atom: `${pkg.homepage}/atom`,
  },
  id: pkg.homepage,
  image: `${pkg.homepage}/apple-touch-icon.png`,
  link: pkg.homepage,
  title: pkg.title,
})

rssPosts.forEach(post => {
  const { body, date, isPost, ...rest } = post
  rssFeed.addItem({
    ...rest,
    content: body, // TODO: Need to convert `body` to html or plain text?
    date: parseAsDate(date),
    link: post.url,
  })
})

// TODO: Write out the feed prior to launch.
// console.log(rssFeed.rss2()) // Output: RSS 2.0
// console.log(rssFeed.atom1()) // Output: Atom 1.0
// console.log(rssFeed.json1()) // Output: JSON Feed 1.0
