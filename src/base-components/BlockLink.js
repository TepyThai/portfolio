import { Link } from 'rebass'
import React from 'react'

const BlockLink = props => (
  <Link
    color="inherit"
    {...props}
    css={{
      display: 'block',
      textDecoration: 'none',
    }}
  />
)
export default BlockLink
