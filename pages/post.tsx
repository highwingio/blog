import styled from '@emotion/styled'
import Link from 'next/Link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import posts from '../posts/data.json'

type PropsType = {
  id: string
}

const Root = styled.article({})

const Paragraph = styled.p({
  color: 'green',
})

const Img = styled.img({})

const Title = styled.h1({
  fontSize: 72,
})

const Heading = styled.h2({
  fontSize: 64,
})

const TextHeading = styled.h4({
  color: 'purple',
  fontSize: 16,
  fontWeight: 700,
})

const flatten = (text: any, child: any) =>
  typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)

const HeadingRenderer = (props: any) => {
  const { headings, level, children } = props
  const Comp = headings[level - 1] || TextHeading
  const kids = React.Children.toArray(children)
  const text = kids.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return <Comp as={`h${level}`} id={slug} {...props} />
}

const headings = [Title, Heading]

const components = {
  heading: (props: any) => <HeadingRenderer headings={headings} {...props} />,
  image: (props: any) => <Img {...props} />,
  paragraph: (props: any) => <Paragraph {...props} />,
  root: (props: any) => <Root {...props} />,
}

const Post = (props: PropsType) => {
  const post = posts.find(p => p.id === props.id)
  console.log('props and post is', props, post)
  return (
    <main role="main">
      {post != null && (
        <ReactMarkdown renderers={components} source={post.source} />
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
