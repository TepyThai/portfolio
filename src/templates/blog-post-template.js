import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Header from '../components/header'
import Container from '../base-components/Container'
import theme from '../utils/theme'
import Caps from '../base-components/Caps'
import SmCaps from '../base-components/SmCaps'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header siteTitle="Tepy Thai" isBlog={true} />
        <Helmet title={`Tepy Thai - ${post.frontmatter.title}`} />
        <Container mx={['2rem', '2rem', '2rem', 'auto']} mt={['2rem', '4rem']}>
          <Caps>{post.frontmatter.title}</Caps>
          <SmCaps dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default Template
