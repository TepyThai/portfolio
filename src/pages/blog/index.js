import React from 'react'
import Projects from '../../components/projects'
import { ThemeProvider } from 'styled-components'
import theme from '../../utils/theme'
import Helmet from 'react-helmet'
import Header from '../../components/header'
import SEO from '../../components/seo'
import StyledButton from '../../base-components/StyledButton'
import NavLink from '../../base-components/NavLink'
import Caps from '../../base-components/Caps'
import Container from '../../base-components/Container'

function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        {/* <Helmet>
          <header>
            <a href="#main-content">To content</a>
          </header>
        </Helmet> */}

        {/* <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        > */}
        <Header siteTitle="Tepy Thai" isBlog />
        {/* <StyledButton style={{ padding: 0 }}>
            <NavLink to="/blog" astitle="true" className="main-title">
              <Caps
                upperCase
                fontWeight="bold"
                fontSize={3}
                style={{ display: 'inline', textAlign: 'center' }}
                p={0}
              >
                "TEPY"
              </Caps>
            </NavLink>
          </StyledButton> */}
        {/* </div> */}
        <main id="main-content">
          <Projects />
        </main>
      </>
    </ThemeProvider>
  )
}

export default Blog
