import React from 'react'
import data from '../content/data.json'
import Head from 'next/head'
import { Container, Grid, Paragraph, Title } from '../components/Elements'
import PostCard, { PostCardGrid, PostType } from '../components/PostCard'
import pkg from '../package.json'

// Require a "published date" to render a card
const defaultPosts = data.filter(f => f.isPost === true)

// Page info
const headDescription = 'Add a description about this page.'
const headTitle = 'Imagine Analytics Blog'
const headUrl = `${pkg.homepage}/blog`

const Blog = () => {
  return (
    <Container as="main" css={{ gridGap: '2rem' }} role="main">
      <Head>
        <title key="meta:title">{headTitle}</title>
        <meta key="og:title" property="og:title" content={headTitle} />
        <meta key="meta:url" name="url" itemProp="url" content={headUrl} />
        <meta
          key="meta:description"
          name="description"
          itemProp="description"
          content={headDescription}
        />
        <meta key="og:url" property="og:url" content={headUrl} />
        <meta
          key="og:description"
          property="og:description"
          content={headDescription}
        />
      </Head>
      <Grid as="header">
        <Title>Blog</Title>
        <Paragraph>Words and stuff about this page.</Paragraph>
      </Grid>
      <PostCardGrid as="section">
        {defaultPosts.map((post, index) => (
          <PostCard
            span={index === 0 ? 2 : undefined}
            post={post as PostType}
            key={post.id}
          />
        ))}
      </PostCardGrid>
    </Container>
  )
}

export default Blog
