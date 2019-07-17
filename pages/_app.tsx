import { CSSObject, Global } from '@emotion/core'
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
