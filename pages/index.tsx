import Link from 'next/Link'
import React from 'react'
import styled from '@emotion/styled'

const Grid = styled.div({
  display: 'grid',
  color: 'pink',
})

type PostType = {
  id: string
  pathname: string
  source: string
}

type DataType = {
  query: {
    posts: PostType[]
  }
}

type PropsType = {
  posts: PostType[]
}

const Index = ({ ...props }: PropsType) => {
  return (
    <main role="main">
      <h1>Index</h1>
      <Grid>
        {props.posts.map(post => (
          <Link key={post.id} href={post.pathname}>
            <a>{post.id}</a>
          </Link>
        ))}
        <Link href="/about">
          <a>About</a>
        </Link>
      </Grid>
    </main>
  )
}

Index.getInitialProps = async ({ query }: DataType) => {
  return { posts: query.posts }
}

export default Index
