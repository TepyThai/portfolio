import { Box } from 'rebass'
import styled from 'styled-components'

const Container = styled(Box)`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto',
}
export default Container
