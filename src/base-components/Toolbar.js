import { Flex } from 'rebass'
import styled from 'styled-components'

const Toolbar = styled(Flex)`
  box-shadow: ${p => (p.boxShadow ? '0 2px 16px rgba(0, 0, 0, 0.25)' : 'none')};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  margin: 0;
`
Toolbar.defaultProps = {
  px: 2,
  color: 'white',
  bg: 'black',
  alignItems: 'center',
  justifyContent: 'center',
}

export default Toolbar
