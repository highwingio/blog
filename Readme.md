# Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a913231-0af5-4b33-a972-e09376633675/deploy-status)](https://app.netlify.com/sites/imagine-analytics-eng-blog/deploys)

## Development

Run `yarn dev` to start the next.js server and open up http://localhost:3000.

To get hot reloading of markdown files run `yarn write` in a new Terminal tab
alongside the next.js server to start the file watcher.

If you add a new markdown file, you'll have to restart the server (`yarn dev`)
to pick up the changes. Pretty sure you don't have to restart the markdown
watcher (`yarn write`) but I have been known to be wrong from time to time.

## Todo

- [x] Export statically
- [x] RSS Feed
- [x] Front matter
- [x] Collection Posts
- [x] Nav, Footer, About etc.
- [x] Deployments
- [ ] Syntax highlighting on code blocks
- [ ] SEO friendly (rss feed as well)
- [ ] Define Workflow (Slack notifications, Peer review, Post Linter, Test Suite)
- [ ] Add real content

## Future

- [ ] Categories ~Tags~
- [ ] Category and content search
- [ ] Paginated landing pages
