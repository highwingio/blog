import { CSSObject, Global } from '@emotion/core'
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import pkg from '../package.json'

const STYLES: CSSObject = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily:
      'Montserrat, -apple-system, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: '100%',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1.5,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitTextSizeAdjust: '100%',
  },
  body: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
  '::selection': {
    background: '#035e7a',
    color: '#fff',
    textShadow: 'none',
  },
  '.scrollIsDisabled': {
    overflow: 'hidden',
  },
}

export default class Application extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title key="meta:title">{pkg.title}</title>
          <meta name="application-name" content={pkg.name} />
          <meta name="subject" content={pkg.description} />
          <meta name="name" itemProp="name" content={pkg.name} />
          <meta
            key="meta:image"
            name="image"
            itemProp="image"
            content={`${pkg.homepage}/apple-touch-icon.png`}
          />
          <meta
            key="meta:url"
            name="url"
            itemProp="url"
            content={pkg.homepage}
          />
          <meta
            key="meta:description"
            name="description"
            itemProp="description"
            content={pkg.description}
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={pkg.name} />
          <meta key="og:title" property="og:title" content={pkg.title} />
          <meta
            key="og:image"
            property="og:image"
            content={`${pkg.homepage}/apple-touch-icon.png`}
          />
          <meta key="og:url" property="og:url" content={pkg.homepage} />
          <meta
            key="og:description"
            property="og:description"
            content={pkg.description}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="referrer" content="always" />
          <meta name="robots" content="index, follow" />
          <link
            href={`${pkg.homepage}/favicon.svg`}
            color="#000"
            rel="mask-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
            key="google-font-montserrat"
            rel="stylesheet"
          />
        </Head>
        <Global styles={STYLES} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}
