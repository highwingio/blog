import React from 'react'
import ReactMarkdown from 'react-markdown'
import data from '../content/data.json'
import { Container } from '../components/Elements'
import MarkdownParts from '../components/MarkdownParts'

type PropsType = {
  id: string
}

type DataType = {
  query: PropsType
}

const Generic = (props: PropsType) => {
  const item = data.find(f => f.id === props.id)
  return (
    <Container as="main" css={{ gridGap: '2rem' }} role="main">
      {item != null && (
        <ReactMarkdown renderers={MarkdownParts} source={item.body} />
      )}
    </Container>
  )
}

Generic.getInitialProps = async ({ query }: DataType) => {
  return { id: query.id }
}
export default Generic
