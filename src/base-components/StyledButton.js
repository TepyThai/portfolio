import styled from 'styled-components'
import { Button } from 'rebass'
const StyledButton = styled(Button)`
  display: ${p => (p.block ? 'block' : 'inline-block')};
  text-transform: ${p => (p.makeCaps ? 'uppercase' : 'none')};
  cursor: pointer;
  text-decoration: none;
  padding: 10px 0;
  margin: ${p => (p.navtype ? '0 15px' : '0')};
  position: relative;
  letter-spacing: 0.05rem;
  color: ${props => props.theme.colors.yellow};
  background: transparent;
  font-weight: normal;
  width: ${p => (p.isfullWidth || p.block ? '100%' : 'auto')};
  font-family: ${p => p.theme.fonts.mono};
  transition: color 0.4s ease-out;
  &::after {
    content: '';
    position: absolute;
    border-top: 0.1em solid ${props => props.theme.colors.red};
    border-radius: 1em;
    bottom: 0.14em;
    left: 0;
    right: 100%;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1),
      border-color 0.4s ease-out;
  }
  :hover {
    color: ${p => p.theme.colors.red};
    outline: none;
    text-decoration: none;
    ::after {
      right: ${p => (p.isfullWidth ? '100%' : '0')};
    }
  }

  :active {
    color: ${p => p.theme.colors.yellow};
    outline: none;
  }
  :focus {
    outline: none;
  }
`
export default StyledButton
