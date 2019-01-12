import { Box } from 'rebass'
import React from 'react'
const Fixed = props => (
  <Box
    {...props}
    css={{
      position: 'fixed',
    }}
  />
)

export default Fixed
