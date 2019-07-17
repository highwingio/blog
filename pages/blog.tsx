import React from 'react'
import data from '../content/data.json'
import { Container, Grid, Paragraph, Title } from '../components/Elements'
import PostCard, { PostCardGrid, PostType } from '../components/PostCard'

// Require a "published date" to render a card
const defaultPosts = data.filter(f => f.date != null && /^posts/.test(f.id))

const Blog = () => {
  return (
    <Container as="main" css={{ gridGap: '2rem' }} role="main">
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
