import React from 'react'
import { ThemeProvider } from 'styled-components'
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
      <Header siteTitle="Tepy Thai" />
      <Intro introTitle="Tepy" />
      <Container>
        <Projects />
        <About />
      </Container>
    </React.Fragment>
  </ThemeProvider>
)

export default IndexPage
