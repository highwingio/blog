import React from 'react'
import { Container, Grid, Paragraph, Title } from '../wtf/Elements'

const Engineering = () => (
  <Container as="main" css={{ gridGap: '2rem' }} role="main">
    <Grid as="header">
      <Title>Engineering</Title>
      <Paragraph>Words and stuff about this page.</Paragraph>
    </Grid>
  </Container>
)

export default Engineering
