import React from 'react'
import posts from '../posts/data.json'
import { Container, Grid, Paragraph, Title } from '../wtf/Elements'
import PostCard, { PostCardGrid, PostType } from '../wtf/PostCard'

// Require a "published date" to render a card
const defaultPosts = posts.filter(p => p.date != null)

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
