import Link from 'next/Link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import posts from '../posts/data.json'
import Components from '../components'

type PropsType = {
  id: string
}

const Post = (props: PropsType) => {
  const post = posts.find(p => p.id === props.id)
  console.log('props and post is', props, post)
  return (
    <main role="main">
      {post != null && (
        <ReactMarkdown renderers={Components} source={post.source} />
      )}
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  )
}

Post.getInitialProps = async ({ query }: any) => {
  return { id: query.id }
}
export default Post
