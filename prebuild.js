#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const parseAsDate = require('date-fns/parse')
const compareDesc = require('date-fns/compare_desc')
const Feed = require('feed').Feed

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
  title: 'Feed Title',
  description: 'This is my personal feed!',
  id: 'http://example.com/',
  link: 'http://example.com/',
  // language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: 'http://example.com/image.png',
  favicon: 'http://example.com/favicon.ico',
  copyright: 'All rights reserved 2013, John Doe',
  // updated: new Date(2013, 6, 14), // optional, default = today
  generator: ':metal:', // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: 'https://example.com/json',
    atom: 'https://example.com/atom',
  },
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    link: 'https://example.com/johndoe',
  },
})

rssPosts.forEach(post => {
  const { body, date, ...rest } = post
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
