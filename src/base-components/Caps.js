import { Text } from 'rebass'
import styled from 'styled-components'

const Caps = styled(Text)`
  text-transform: ${p => (p.upperCase ? 'uppercase' : 'none')};
  display: ${p => (p.inline ? 'inline-block' : 'inherit')};
  z-index: inherit;
  /* line-height: 30px; */
  /* border-bottom: 1px solid white; */
`
Caps.defaultProps = {
  fontSize: 4,
  fontFamily: 'mono',
  p: 1,
  letterSpacing: '0.1rem',
  lineHeight: '30px',
}

export default Caps
