import { Box } from 'rebass/styled-components'
import React from 'react'
const Divider = props => (
  <Box
    {...props}
    as="hr"
    bg="gray"
    css={{
      border: 0,
      height: 1,
    }}
  />
)

export default Divider
