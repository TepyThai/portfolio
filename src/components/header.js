import PropTypes from 'prop-types'
import React from 'react'
import { Box, Flex, Button } from 'rebass'
import { createGlobalStyle } from 'styled-components'
import Toolbar from '../base-components/Toolbar'
import Caps from '../base-components/Caps'
import Container from '../base-components/Container'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import posed from 'react-pose'

import ButtonScroll from '../base-components/ButtonScroll'
import NavLink from '../base-components/NavLink'
import SocialLinks from './social-links'

const GlobalStyle = createGlobalStyle`
  root{
    box-sizing: border-box;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:focus{
    outline: 0;
  }
`
const PosedUL = posed.ul({
  open: {
    y: '0%',
    delayChildren: 70,
    staggerChildren: 50,
  },
  closed: {
    y: '-50%',
    delay: 300,
  },
})

// const PosedLI = posed.li({
//   open: { y: 0, opacity: 1 },
//   closed: { y: 0, opacity: 0 },
// })
const StyledPosedUL = styled(PosedUL)`
  display: ${p => (p.open ? 'block' : 'none')};

  @media (min-width: 40em) {
    display: none;
  }
`
// const StyledPosedLI = styled(PosedLI)`
//   display: block;
//   width: 100%;
//   padding: 10px 0;
//   @media (min-width: 40em) {
//     display: inline-block;
//   }
// `
const NavLinkWrapper = styled(Flex)`
  display: none;
  .last {
    margin-right: 0;
  }
  @media (min-width: 40em) {
    display: ${p => (p.isBlog ? 'flex' : 'inline-block')};
    padding-right: 0;
  }
`
const MenuWrapper = styled(Button)`
  display: inline-block;
  cursor: pointer;
  padding-right: 0;
  background-color: transparent;

  @media (min-width: 40em) {
    display: none;
  }
`
const menuQuery = graphql`
  query {
    menuIconWhite: file(relativePath: { eq: "menu-white.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    menuIconCloseWhite: file(relativePath: { eq: "close-menu-white.png" }) {
      childImageSharp {
        fixed(width: 24, height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  closeMenu = () => this.setState({ isOpen: false })
  render() {
    const { isBlog } = this.props

    return (
      <StaticQuery
        query={menuQuery}
        render={data => (
          <Toolbar boxShadow py={1} m={0}>
            <Container width={[1]} px={2}>
              <Toolbar width={[1]} className="asSubToolbar">
                <NavLink to="/" astitle="true">
                  <Caps upperCase fontWeight="bold" fontSize={3}>
                    {this.props.siteTitle}
                  </Caps>
                </NavLink>

                <Box mx="auto" />
                <NavLinkWrapper flexDirection="row" p={0} m={0} isBlog={isBlog}>
                  {!isBlog && (
                    <>
                      <ButtonScroll navtype scrollToName="scroll-to-projects">
                        Projects
                      </ButtonScroll>
                      <ButtonScroll navtype scrollToName="scroll-to-about">
                        About Me
                      </ButtonScroll>
                    </>
                  )}
                  {isBlog && <SocialLinks />}
                  <ButtonScroll
                    navtype
                    as="a"
                    href="mailto:thaitepy@gmail.com"
                    rel="noopener noreferrer"
                    className="last"
                    target="_blank"
                  >
                    Contact Me
                  </ButtonScroll>
                </NavLinkWrapper>
                <MenuWrapper onClick={this.toggle}>
                  {this.state.isOpen ? (
                    <Img
                      fixed={data.menuIconCloseWhite.childImageSharp.fixed}
                    />
                  ) : (
                    <Img fixed={data.menuIconWhite.childImageSharp.fixed} />
                  )}
                </MenuWrapper>
              </Toolbar>
              <StyledPosedUL
                pose={this.state.isOpen ? 'open' : 'closed'}
                open={this.state.isOpen}
              >
                {!isBlog && (
                  <React.Fragment>
                    <ButtonScroll
                      as="li"
                      block={true}
                      scrollToName="scroll-to-projects"
                      closeMenu={this.closeMenu}
                    >
                      Projects
                    </ButtonScroll>

                    <ButtonScroll
                      block={true}
                      as="li"
                      scrollToName="scroll-to-about"
                      closeMenu={this.closeMenu}
                    >
                      About Me
                    </ButtonScroll>
                  </React.Fragment>
                )}
                {isBlog && <SocialLinks />}

                <ButtonScroll
                  block={true}
                  as="a"
                  href="mailto:thaitepy@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="last"
                  closeMenu={this.closeMenu}
                >
                  Contact Me
                </ButtonScroll>
              </StyledPosedUL>
            </Container>

            <GlobalStyle />
          </Toolbar>
        )}
      />
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
