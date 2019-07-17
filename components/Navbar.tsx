import styled from '@emotion/styled'
import NextLink from 'next/Link'
import { useRouter } from 'next/router'
import { Anchor, Flex, View } from './Elements'

const NavAnchor = styled(Anchor)<{ active?: boolean }>(
  {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: '0 1rem',
    transition: 'background-color 0.333s, color 0.333s',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#9e6202',
    },
  },
  ({ active }) => ({
    backgroundColor: `rgba(255, 255, 255, ${active ? '1' : '0.666'})`,
    color: active ? '#9e6202' : 'currentColor',
  }),
)

const Navbar = () => {
  const router = useRouter()
  return (
    <View
      as="nav"
      css={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        color: '#012f3f',
        height: '4rem',
        marginBottom: '2rem',
        position: 'sticky',
        top: 0,
      }}
      role="navigation"
    >
      <Flex
        css={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'flex-end',
          margin: '0 auto',
          maxWidth: '72rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          position: 'relative',
        }}
      >
        <NextLink as="/" href={{ pathname: '/' }} passHref>
          <NavAnchor
            active={router.route === '/'}
            css={{ position: 'absolute', left: 0 }}
          >
            hw
          </NavAnchor>
        </NextLink>
        <NextLink
          as="/engineering"
          href={{ pathname: '/engineering' }}
          passHref
        >
          <NavAnchor active={/\/engineering/.test(router.route)}>
            Engineering
          </NavAnchor>
        </NextLink>
        <NextLink as="/blog" href={{ pathname: '/blog' }} passHref>
          <NavAnchor active={/\/blog|/.test(router.route)}>Blog</NavAnchor>
        </NextLink>
        <NavAnchor href="https://imagine-analytics.com/">Careers</NavAnchor>
      </Flex>
    </View>
  )
}

export default Navbar
