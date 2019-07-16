import styled from '@emotion/styled'
import colors from '../colors'
import { HeadingRenderer, ListRenderer } from './renderers'

export const Root = styled.article({
  color: colors.greys[3],
  padding: '2rem',
})

export const Img = styled.img({
  maxWidth: '80%',
  borderRadius: '0.2rem',
})

export const Title = styled.h1({
  color: colors.greys[4],
  fontSize: '5rem',
  fontWeight: 200,
  margin: '2rem 0',
})

export const Heading = styled.h2({
  color: colors.greys[4],
  fontSize: '4rem',
  fontWeight: 200,
  margin: '2rem 0',
})

export const SubHeading = styled.h3({
  color: colors.blues[1],
  fontSize: '3rem',
  fontWeight: 200,
  margin: '2rem 0',
})

export const TextHeading = styled.h4({
  color: colors.greys[5],
  fontSize: '2rem',
  fontWeight: 200,
  margin: '1rem 0',
})

export const CTAHeading = styled.h5({
  color: colors.greys[5],
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  margin: '0.5rem 0',
})

export const MenuHeading = styled.h6({
  color: colors.greys[5],
  fontSize: '0.85rem',
  fontWeight: 600,
  margin: '0.5rem, 0',
  textTransform: 'uppercase',
})

export const Anchor = styled.a({
  color: colors.teals[3],
  textDecoration: 'none',
})

export const BlockQuote = styled.blockquote({
  color: colors.greys[5],
  borderLeft: `0.2rem solid ${colors.blues[1]}`,
  paddingLeft: '1rem',
})

export const OL = styled.ol({
  color: colors.greys[4],
})

export const UL = styled.ul({
  color: colors.greys[4],
  listStyleType: 'disc',
})

export const CodeBlock = styled.pre({
  backgroundColor: colors.greys[0],
  borderRadius: '0.2rem',
  color: colors.teals[4],
  fontSize: '1.2rem',
  padding: '1rem',
})

export const InlineCode = styled.code({
  backgroundColor: colors.greys[0],
  borderRadius: '0.2rem',
  color: colors.teals[4],
  fontSize: '1.3rem',
  padding: '0.1rem 0.5rem',
})

const headings = [
  Title,
  Heading,
  SubHeading,
  TextHeading,
  CTAHeading,
  MenuHeading,
]

const components = {
  heading: (props: any) => <HeadingRenderer headings={headings} {...props} />,
  image: (props: any) => <Img {...props} />,
  root: (props: any) => <Root {...props} />,
  link: (props: any) => <Anchor {...props} />,
  linkReference: (props: any) => <Anchor {...props} />,
  blockquote: (props: any) => <BlockQuote {...props} />,
  list: (props: any) => <ListRenderer {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
}

export default components
