import styled from '@emotion/styled'
import { Grid } from '../wtf/Elements'

const Spread = styled(Grid)<{ type?: 'imgLeft' | 'imgRight' }>(
  {
    border: '1px solid',
    alignItems: 'center',
    minHeight: '24rem',
  },
  ({ type }) => ({
    '@media (min-width: 40em)': {
      gridTemplateColumns: type === 'imgRight' ? '1fr 24rem' : '24rem 1fr',
    },
  }),
)

export default Spread
