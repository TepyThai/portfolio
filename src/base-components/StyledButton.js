import styled from 'styled-components'
import { Button } from 'rebass/styled-components'
import NavLink from './NavLink'
import { ButtonLinkWrapper } from './ButtonLink'
const StyledButton = styled(Button)`
  display: ${p => (p.block ? 'block' : 'inline-block')};
  text-transform: ${p => (p.makeCaps ? 'uppercase' : 'none')};
  cursor: pointer;
  text-decoration: none;
  padding: 10px 0;
  margin: ${p => (p.navtype ? '0 15px' : '0')};
  position: relative;
  letter-spacing: 0.05rem;
  color: ${p =>
    p.insideWrapper ? p.theme.colors.darkYellow : p.theme.colors.white};
  background: transparent;
  font-weight: normal;
  width: ${p => (p.isfullwidth || p.block ? '100%' : 'auto')};
  font-family: ${p => p.theme.fonts.mono};
  transition: color 0.4s ease-out;

  &::after {
    content: '';
    position: absolute;
    border-top: 0.1em solid ${p => p.theme.colors.yellow};
    border-radius: 1em;
    bottom: 0.14em;
    left: 0;
    right: 100%;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1),
      border-color 0.4s ease-out;
  }
  :hover,
  .main-title,
  ${ButtonLinkWrapper}:hover &,
  ${NavLink}:hover & {
    color: ${p => p.theme.colors.red};
    background: ${p =>
      `linear-gradient(to right, ${p.theme.colors.yellow}, ${p.theme.colors.red})`};
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    outline: none;
    text-decoration: none;
    ::after {
      right: ${p => (p.isfullwidth || p.isMailLink ? '100%' : '0')};
    }
  }

  :active {
    color: ${p => p.theme.colors.yellow};
    background: ${p =>
      `linear-gradient(to right, ${p.theme.colors.yellow}, ${p.theme.colors.red})`};
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    outline: none;
  }
  :focus {
    outline: none;
  }
`
export default StyledButton
