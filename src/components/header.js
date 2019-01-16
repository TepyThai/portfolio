import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { createGlobalStyle } from 'styled-components'
import { Box, Flex, Button } from 'rebass'
import posed from 'react-pose'

import Toolbar from '../base-components/Toolbar'
import Caps from '../base-components/Caps'
import Container from '../base-components/Container'
import ButtonScroll from '../base-components/ButtonScroll'
import NavLink from '../base-components/NavLink'
import SocialLinks from './social-links'
import StyledButton from '../base-components/StyledButton'

const GlobalStyle = createGlobalStyle`
  root{
    box-sizing: border-box;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* position: ${p => (p.menuOpen ? 'fixed' : 'inherit')}; */
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
    transition: {
      duration: 2000,
    },
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

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${p => (p.menuOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
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
    const { isOpen } = this.state
    return (
      <StaticQuery
        query={menuQuery}
        render={data => (
          <React.Fragment>
            <Toolbar boxShadow py={1} m={0}>
              <Container width={[1]} px={2}>
                <Toolbar width={[1]} className="asSubToolbar">
                  <StyledButton style={{ padding: 0 }}>
                    <NavLink to="/" astitle="true" className="main-title">
                      <Caps
                        upperCase
                        fontWeight="bold"
                        fontSize={3}
                        style={{ display: 'inline' }}
                        p={0}
                      >
                        {this.props.siteTitle}
                      </Caps>
                    </NavLink>
                  </StyledButton>

                  <Box mx="auto" />
                  <NavLinkWrapper
                    flexDirection="row"
                    p={0}
                    m={0}
                    isBlog={isBlog}
                  >
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
                    {isOpen ? (
                      <Img
                        title="close menu"
                        alt="close menu"
                        fixed={data.menuIconCloseWhite.childImageSharp.fixed}
                      />
                    ) : (
                      <Img
                        title="open menu"
                        alt="open menu"
                        fixed={data.menuIconWhite.childImageSharp.fixed}
                      />
                    )}
                  </MenuWrapper>
                </Toolbar>
                <StyledPosedUL pose={isOpen ? 'open' : 'closed'} open={isOpen}>
                  {!isBlog && (
                    <React.Fragment>
                      <ButtonScroll
                        as="li"
                        block={true}
                        scrollToName="scroll-to-projects"
                        closeMenu={this.closeMenu}
                        isfullwidth
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

              <GlobalStyle menuOpen={isOpen} />
            </Toolbar>
            <Backdrop menuOpen={isOpen} onClick={this.closeMenu} />
          </React.Fragment>
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
