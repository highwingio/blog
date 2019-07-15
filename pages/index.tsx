import Link from 'next/Link'
import React from 'react'
import styled from '@emotion/styled'
import posts from '../posts/data.json'

const Grid = styled.div({
  display: 'grid',
  color: 'pink',
})

const Index = () => {
  return (
    <main role="main">
      <h1>Index</h1>
      <Grid>
        {posts.map(post => (
          <Link
            as={post.pathname}
            href={{ pathname: '/post', query: { id: post.id } }}
            key={post.id}
          >
            <a>{post.id}</a>
          </Link>
        ))}
        <Link as="/about" href={{ pathname: '/about' }}>
          <a>About</a>
        </Link>
      </Grid>
    </main>
  )
}

export default Index
