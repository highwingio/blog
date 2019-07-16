import styled, { CSSObject } from '@emotion/styled'

const noob = {}

export const DISABLED: CSSObject = {
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

const headingDefaults: CSSObject = {
  fontWeight: 200,
  lineHeight: 1,
  margin: 0,
  textTransform: 'uppercase',
}

export const Title = styled.h1<TextType>(
  {
    ...headingDefaults,
    fontSize: '3rem',
  },
  useCss,
)
export const Heading = styled.h2<TextType>(
  {
    ...headingDefaults,
    fontSize: '2.5rem',
  },
  useCss,
)
export const Subheading = styled.h3<TextType>(
  {
    ...headingDefaults,
    fontSize: '1.75rem',
    fontWeight: 600,
  },
  useCss,
)
export const Text = styled.span<TextType>({}, useCss)
export const Paragraph = styled.p<TextType>({}, useCss)
export const Link = styled.a<TextType>(
  {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecoration: 'none',
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
