import NextLink from 'next/link'
import React from 'react'
import data from '../content/data.json'
import {
  Anchor,
  BTN,
  Container,
  Grid,
  Img,
  Paragraph,
  Subheading,
  Title,
  View,
} from '../components/Elements'
import PostCard, { PostCardGrid, PostType } from '../components/PostCard'
import Spread from '../components/Spread'

// use the top 3 recent posts
const defaultPosts = data.filter(f => f.isPost === true).slice(0, 3)

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
          <Anchor css={BTN.PRIMARY}>About the Engineering Team</Anchor>
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
          <Anchor css={BTN.PRIMARY}>View All Blog Posts</Anchor>
        </NextLink>
      </View>
    </Grid>

    <Spread as="section" type="imgRight">
      <View css={{ padding: '2rem' }}>
        <Subheading as="h2">Come with work us!</Subheading>
        <Paragraph>Words and stuff about this panel.</Paragraph>
        <Anchor href="https://imagine-analytics.com/" css={BTN.PRIMARY}>
          Careers at HW
        </Anchor>
      </View>
      <View>
        <Img
          alt="Careers"
          responsive
          src="https://source.unsplash.com/768x768/daily?career"
        />
      </View>
    </Spread>

    {process.env.NODE_ENV === 'development' && (
      <Spread as="section">
        <View>
          <Img
            alt="Styles"
            responsive
            src="https://source.unsplash.com/768x768/daily?style"
          />
        </View>
        <View css={{ padding: '2rem' }}>
          <Subheading as="h2">Styleguide</Subheading>
          <Paragraph>Only enabled in development.</Paragraph>
          <NextLink
            as="/styleguide"
            href={{ pathname: '/styleguide' }}
            passHref
          >
            <Anchor css={BTN.PRIMARY}>View the Styleguide</Anchor>
          </NextLink>
        </View>
      </Spread>
    )}
  </Container>
)

export default Index
