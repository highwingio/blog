import styled, { CSSObject } from '@emotion/styled'
import colors from './colors'

// -------------------------------------
// Raw styles

const noob = {}

const DISABLED: CSSObject = {
  cursor: 'not-allowed',
  opacity: 0.5,
  pointerEvents: 'none',
}

const BTN_BASE: CSSObject = {
  alignItems: 'center',
  borderRadius: '0.1875rem',
  display: 'inline-flex',
  fontSize: '0.75rem',
  fontWeight: 600,
  height: '2rem',
  justifyContent: 'center',
  lineHeight: 1,
  paddingLeft: '1rem',
  paddingRight: '1rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  transitionDuration: '0.333s',
  transitionProperties: 'background-color, color, opacity',
  '&[disabled], &[readonly]': DISABLED,
}

export const BTN = {
  BASE: {
    ...BTN_BASE,
  },
  PRIMARY: {
    ...BTN_BASE,
    backgroundColor: '#006667',
    color: '#d2fff9',
    '&:hover': {
      backgroundColor: '#99042E',
      color: '#d2fff9',
    },
  },
}

// -------------------------------------
// Types and helpers

type useCssType = {
  readonly css?: CSSObject
}

const useCss = ({ css }: useCssType) => ({
  ...(css != null ? css : noob),
})

type ElementType = {
  readonly as?: 'div' | 'footer' | 'header' | 'main' | 'nav' | 'section'
} & useCssType

type TextType = {
  readonly as?: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
} & useCssType

type ImgType = {
  readonly alt: string
} & useCssType

// -------------------------------------
// Layout containers

export const Flex = styled.div<ElementType>({ display: 'flex' }, useCss)
export const Grid = styled.div<ElementType>({ display: 'grid' }, useCss)
export const View = styled.div<ElementType>({}, useCss)
export const Container = styled(Grid)<ElementType>(
  {
    margin: '0 auto',
    maxWidth: '64rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  useCss,
)

// -------------------------------------
// Headings

export const Title = styled.h1<TextType>(
  {
    color: colors.greys[4],
    fontSize: '5rem',
    fontWeight: 200,
    lineHeight: 1,
    margin: '2rem 0',
  },
  useCss,
)
export const Heading = styled.h2<TextType>(
  {
    color: colors.greys[4],
    fontSize: '4rem',
    fontWeight: 200,
    lineHeight: 1,
    margin: '2rem 0',
  },
  useCss,
)
export const Subheading = styled.h3<TextType>(
  {
    color: colors.blues[1],
    fontSize: '3rem',
    fontWeight: 200,
    lineHeight: 1,
    margin: '2rem 0',
  },
  useCss,
)

export const TextHeading = styled.h4<TextType>(
  {
    color: colors.greys[5],
    fontSize: '2rem',
    fontWeight: 200,
    margin: '1rem 0',
  },
  useCss,
)

export const CTAHeading = styled.h5<TextType>(
  {
    color: colors.greys[5],
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    margin: '0.5rem 0',
  },
  useCss,
)

export const MenuHeading = styled.h6<TextType>(
  {
    color: colors.greys[5],
    fontSize: '0.85rem',
    fontWeight: 600,
    margin: '0.5rem, 0',
    textTransform: 'uppercase',
  },
  useCss,
)

// -------------------------------------
// Text and media

export const Text = styled.span<TextType>({}, useCss)
export const Paragraph = styled.p<TextType>({}, useCss)
export const Anchor = styled.a<TextType>(
  {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'none',
  },
  useCss,
)

export const BlockQuote = styled.blockquote<useCssType>(
  {
    color: colors.greys[5],
    borderLeft: `0.2rem solid ${colors.blues[1]}`,
    paddingLeft: '1rem',
  },
  useCss,
)

export const Ol = styled.ol<useCssType>(
  {
    color: colors.greys[4],
  },
  useCss,
)

export const Ul = styled.ul<useCssType>(
  {
    color: colors.greys[4],
    listStyleType: 'disc',
  },
  useCss,
)

export const CodeBlock = styled.pre<useCssType>(
  {
    backgroundColor: colors.greys[0],
    borderRadius: '0.2rem',
    color: colors.teals[4],
    fontSize: '1.2rem',
    padding: '1rem',
  },
  useCss,
)

export const InlineCode = styled.code<useCssType>(
  {
    backgroundColor: colors.greys[0],
    borderRadius: '0.2rem',
    color: colors.teals[4],
    fontSize: '1.3rem',
    padding: '0.1rem 0.5rem',
  },
  useCss,
)

export const Img = styled.img<ImgType & { responsive?: boolean }>(
  {
    border: 0,
    fontSize: '0.75em',
    outline: 0,
    verticalAlign: 'middle',
  },
  ({ responsive }) =>
    responsive === true
      ? {
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
        }
      : noob,
  useCss,
)
