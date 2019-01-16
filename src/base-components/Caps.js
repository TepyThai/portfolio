import { Text } from 'rebass'
import styled from 'styled-components'

const Caps = styled(Text)`
  text-transform: ${p => (p.upperCase ? 'uppercase' : 'none')};
  display: ${p => (p.inline ? 'inline-block' : 'inherit')};
  z-index: inherit;
  background: ${p =>
    p.importantText
      ? `linear-gradient(to right,${p.theme.colors.yellow},${
          p.theme.colors.red
        })`
      : 'none'};
  background-clip: ${p => (p.importantText ? 'text' : '')};
  /* box-decoration-break: ${p => (p.importantText ? 'clone' : '')}; */
  -webkit-text-fill-color: ${p => (p.importantText ? 'transparent' : '')};
  -webkit-background-clip: ${p => (p.importantText ? 'text' : '')};
    
`
Caps.defaultProps = {
  fontSize: 4,
  fontFamily: 'mono',
  p: 1,
  letterSpacing: '0.1rem',
  lineHeight: '30px',
}

export default Caps
