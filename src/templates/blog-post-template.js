import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Header from '../components/header'
import Container from '../base-components/Container'
import theme from '../utils/theme'
import Caps from '../base-components/Caps'
import SmCaps from '../base-components/SmCaps'
import SEO from '../components/seo'

const Template = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SEO
          lang={'en-US'}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          slug={post.fields.slug}
        />
        <Header siteTitle="Tepy Thai" isBlog={true} />
        <Helmet title={`Tepy Thai - ${post.frontmatter.title}`} />
        <Container mx={['2rem', '2rem', '2rem', 'auto']} mt={['2rem', '4rem']}>
          <Caps>{post.frontmatter.title}</Caps>

          <SmCaps inline>{post.frontmatter.date}</SmCaps>
          {`||`}
          <SmCaps inline>Time to read: {post.timeToRead} min</SmCaps>
          <SmCaps dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
export default Template
