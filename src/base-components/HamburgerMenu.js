import React from 'react'
import NavLink from './NavLink'
import styled from 'styled-components'

const MenuContainer = styled.div`
  position: relative;
  margin: 35px auto 0;
  width: 300px;
  height: 534px;
  background-color: #533557;
  overflow: hidden;

  #toggle {
    display: none;
  }
  #toggle:checked {
    & ~ .nav {
    }
  }
`

const HamburgerMenu = () => (
  <MenuContainer>
    <input type="checkbox" id="toggle" />
    <label htmlFor="toggle" className="toggle-container">
      <span className="button button-toggle" />
    </label>

    <nav className="nav">
      <NavLink to="/about-me" className="nav-item">
        About Me
      </NavLink>
      <NavLink to="/projects" className="nav-item">
        Projects
      </NavLink>
      <NavLink to="/contact-me" className="nav-item">
        Contact Me
      </NavLink>
    </nav>
  </MenuContainer>
)

export default HamburgerMenu
