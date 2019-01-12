import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const PosedUL = posed.ul({
  open: {
    y: '46px',
    delayChildren: 200,
    staggerChildren: 50,
  },
  close: {
    y: '-100%',
    delay: 300,
  },
})

const PosedLI = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 0, opacity: 0 },
})
const StyledPosedUL = styled(PosedUL)`
  display: block;
  @media (min-width: 40em) {
    display: inline-block;
  }
`
const StyledPosedLI = styled(PosedLI)`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  display: block;
  color: ${p => p.theme.colors.lightGray};

  font-family: ${p => p.theme.fonts.mono};
  :hover {
    color: ${p => p.theme.colors.teal};
  }
  :active {
    color: ${p => p.theme.colors.lightTeal};
  }
  /* @media (min-width: 40em) {
    display: inline-block;
  } */
`
class Menu extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  closeMenu = () => this.setState({ isOpen: false })
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            menuIcon: file(relativePath: { eq: "menu-white.png" }) {
              childImageSharp {
                fixed(width: 24, height: 24) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <div onClick={this.toggle}>
              <Img fixed={data.menuIcon.childImageSharp.fixed} />
            </div>
            <StyledPosedUL pose={this.state.isOpen ? 'open' : 'closed'}>
              <StyledPosedLI to="/about-me" onClick={this.closeMenu}>
                About Me
              </StyledPosedLI>
              <StyledPosedLI to="/projects" onClick={this.closeMenu}>
                Projects
              </StyledPosedLI>
              <StyledPosedLI to="/contact-me" onClick={this.closeMenu}>
                Contact Me
              </StyledPosedLI>
            </StyledPosedUL>
          </React.Fragment>
        )}
      />
    )
  }
}

export default Menu
