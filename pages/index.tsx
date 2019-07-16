import NextLink from 'next/Link'
import React from 'react'
import posts from '../posts/data.json'
import {
  BTN,
  Container,
  Grid,
  Img,
  Link,
  Paragraph,
  Subheading,
  Title,
  View,
} from '../wtf/Elements'
import PostCard, { PostCardGrid, PostType } from '../wtf/PostCard'
import Spread from '../wtf/Spread'

// use the top 3 recent posts
const defaultPosts = posts.filter(p => p.date != null).slice(0, 3)

const Index = () => (
  <Container as="main" css={{ gridGap: '2rem' }} role="main">
    <Grid as="header">
      <Title>Index</Title>
      <Paragraph>Words and stuff about this site.</Paragraph>
    </Grid>

    <Spread as="section">
      <View>
        <Img
          alt="Engineering"
          responsive
          src="https://source.unsplash.com/768x768/daily?engineering"
        />
      </View>
      <View css={{ padding: '2rem' }}>
        <Subheading as="h2">Engineering</Subheading>
        <Paragraph>Words and stuff about this panel.</Paragraph>
        <NextLink
          as="/engineering"
          href={{ pathname: '/engineering' }}
          passHref
        >
          <Link css={BTN.PRIMARY}>About the Engineering Team</Link>
        </NextLink>
      </View>
    </Spread>

    <Grid as="section" css={{ padding: '1rem', border: '1px solid' }}>
      <Subheading as="h2">Blog</Subheading>
      <Paragraph>Words and stuff about this panel.</Paragraph>
      <PostCardGrid css={{ marginTop: '1rem' }}>
        {defaultPosts.map((post, index) => (
          <PostCard
            span={index === 0 ? 2 : undefined}
            post={post as PostType}
            key={post.id}
          />
        ))}
      </PostCardGrid>
      <View css={{ textAlign: 'right', marginTop: '1rem' }}>
        <NextLink as="/blog" href={{ pathname: '/blog' }} passHref>
          <Link css={BTN.PRIMARY}>View All Blog Posts</Link>
        </NextLink>
      </View>
    </Grid>

    <Spread as="section" type="imgRight">
      <View css={{ padding: '2rem' }}>
        <Subheading as="h2">Come with work us!</Subheading>
        <Paragraph>Words and stuff about this panel.</Paragraph>
        <Link href="https://imagine-analytics.com/" css={BTN.PRIMARY}>
          Careers at HW
        </Link>
      </View>
      <View>
        <Img
          alt="Careers"
          responsive
          src="https://source.unsplash.com/768x768/daily?career"
        />
      </View>
    </Spread>
  </Container>
)

export default Index
