import { Container, View } from './Elements'

const Footer = () => (
  <View
    as="footer"
    css={{ height: '4rem', marginTop: '2rem' }}
    role="contentinfo"
  >
    <Container>
      <small>
        <span>&copy;&nbsp;</span>
        <span>{new Date().getFullYear()}</span>
        <span>&nbsp;Imagine Analytics</span>
      </small>
    </Container>
  </View>
)

export default Footer
