// import { Link } from 'rebass'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NavLink = styled(Link)`
  display: inline-block;
  text-transform: ${p => (p.makeCaps ? 'uppercase' : 'none')};
  cursor: pointer;
  text-decoration: none;
  padding: ${p => (p.astitle ? '0px' : '10px 0')};
  margin: ${p => (p.navtype ? '0 15px' : '0')};
  position: relative;
  letter-spacing: 0.1rem;
  color: ${props => props.theme.colors.yellow};

  width: ${p => (p.isfullwidth ? '100%' : 'auto')};
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
      right: ${p => (p.isfullwidth ? '100%' : '0')};
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

NavLink.propTypes = {
  astitle: PropTypes.string,
}

export default NavLink
