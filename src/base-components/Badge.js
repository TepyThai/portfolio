import { Card, Box } from 'rebass/styled-components'
import React from 'react'
import styled from 'styled-components'

const BadgeWrapper = styled(Box)`
  display: inline-block;
`
const Badge = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${p => p.theme.fonts.mono};
  :hover {
    background-color: inherit;
    color: inherit;
  }
`
Badge.defaultProps = {
  color: 'white',
  bg: 'black',
  px: 3,
  py: 1,
  mr: 2,
  borderRadius: 9999,
  width: 'max-content',
}

export default props => (
  <BadgeWrapper>
    <Badge {...props}>
      <div style={{ display: 'inline-block' }}>{props.children}</div>
    </Badge>
  </BadgeWrapper>
)
