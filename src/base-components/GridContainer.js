import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'

const GridContainer = styled(Flex)`
  display: grid;
  margin: 0px 36px;
  grid-gap: 10px 10px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-content: center;
  justify-items: center;
  @media (max-width: 350px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin: 0px;
  }
`

export default GridContainer
