import { Text } from 'rebass'
import React from 'react'
const Pre = props => (
  <Text
    {...props}
    as="pre"
    fontFamily="Menlo, monospace"
    p={2}
    bg="lightgray"
  />
)

export default Pre
