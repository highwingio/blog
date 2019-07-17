import styled from '@emotion/styled'
import React from 'react'
import colors from './colors'
import {
  Anchor,
  BlockQuote,
  CTAHeading,
  CodeBlock,
  Heading,
  Img,
  InlineCode,
  MenuHeading,
  Ol,
  Subheading,
  TextHeading,
  Title,
  Ul,
} from './Elements'

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

const ListRenderer = (props: any) => {
  const { ordered } = props
  const Comp = ordered ? Ol : Ul
  return <Comp {...props} />
}

const CodeBlockRenderer = (props: any) => (
  <CodeBlock>
    <code className={props.language ? `language-${props.language}` : ''}>
      {props.value}
    </code>
  </CodeBlock>
)

const Root = styled.article({
  color: colors.greys[3],
})

const StyledImg = styled(Img)({
  maxWidth: '80%',
  borderRadius: '0.2rem',
})

const StyledAnchor = styled(Anchor)({
  color: colors.teals[3],
  textDecoration: 'none',
})

// Order matters!
const headings = [
  Title,
  Heading,
  Subheading,
  TextHeading,
  CTAHeading,
  MenuHeading,
]

const components = {
  blockquote: (props: any) => <BlockQuote {...props} />,
  code: (props: any) => <CodeBlockRenderer {...props} />,
  heading: (props: any) => <HeadingRenderer headings={headings} {...props} />,
  image: (props: any) => <StyledImg {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
  link: (props: any) => <StyledAnchor {...props} />,
  linkReference: (props: any) => <StyledAnchor {...props} />,
  list: (props: any) => <ListRenderer {...props} />,
  root: (props: any) => <Root {...props} />,
}

export default components
