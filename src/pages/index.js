import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Intro from '../components/intro'
import About from '../components/about'
import Projects from '../components/projects'
import Container from '../base-components/Container'
import theme from '../utils/theme'
import SEO from '../components/seo'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      <Helmet>
        <header>
          <a href="#main-content">To content</a>
        </header>
      </Helmet>
      <Header siteTitle="Tepy Thai" />
      <main id="main-content">
        <Intro introTitle="Tepy" />
        <Container>
          <Projects />
          <About />
        </Container>
      </main>
    </React.Fragment>
  </ThemeProvider>
)

export default IndexPage
