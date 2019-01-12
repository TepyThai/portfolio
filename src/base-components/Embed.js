import { Box } from 'rebass'
import React from 'react'
const Embed = props => (
  <Box
    {...props}
    width={1}
    css={{
      height: 0,
      paddingBottom: 9 / 16 + '%',
      position: 'relative',
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0,
      },
    }}
  />
)

export default Embed
