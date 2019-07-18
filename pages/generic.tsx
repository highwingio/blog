import Head from 'next/head'
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
        <>
          <Head>
            {item.title != null && (
              <>
                <title key="meta:title">{item.title}</title>
                <meta key="og:title" property="og:title" content={item.title} />
              </>
            )}
            {item.url != null && (
              <>
                <meta
                  key="meta:url"
                  name="url"
                  itemProp="url"
                  content={item.url}
                />
                <meta key="og:url" property="og:url" content={item.url} />
              </>
            )}
            {item.description != null && (
              <>
                <meta
                  key="meta:description"
                  name="description"
                  itemProp="description"
                  content={item.description}
                />
                <meta
                  key="og:description"
                  property="og:description"
                  content={item.description}
                />
              </>
            )}
            {item.image != null && (
              <>
                <meta
                  key="meta:image"
                  name="image"
                  itemProp="image"
                  content={item.image}
                />
                <meta key="og:image" property="og:image" content={item.image} />
              </>
            )}
          </Head>
          <ReactMarkdown renderers={MarkdownParts} source={item.body} />
        </>
      )}
    </Container>
  )
}

Generic.getInitialProps = async ({ query }: DataType) => {
  return { id: query.id }
}
export default Generic
