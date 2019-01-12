import styled from 'styled-components'
import { Button } from 'rebass'
import NavLink from './NavLink'
import React from 'react'

export const ButtonLinkWrapper = styled(Button)`
  display: ${p => p.display || 'block'};
  align-self: center;
  justify-self: center;
  transition: color 0.4s ease-out;
  color: ${p => p.theme.colors.yellow};
  background-color: ${p => p.bg || 'rgba(0, 0, 0, 0.8)'};
  :hover {
    color: ${p => p.theme.colors.red};
    cursor: pointer;
  }
`

ButtonLinkWrapper.defaultProps = {
  variant: 'night',
  borderRadius: 20,
  width: ['200px', '300px'],
  mt: 4,
}

export default ({ children, to, isfullwidth, ...props }) => (
  <ButtonLinkWrapper {...props}>
    <NavLink to={to} isfullwidth={isfullwidth || 'true'}>
      {children}
    </NavLink>
  </ButtonLinkWrapper>
)
