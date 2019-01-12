import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import Container from '../base-components/Container'
import theme from '../utils/theme'
import Caps from '../base-components/Caps'
import ButtonLink from '../base-components/ButtonLink'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
export default props => (
  <StaticQuery
    query={graphql`
      query {
        notFoundImage: file(relativePath: { eq: "404.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header siteTitle="Tepy Thai" isBlog={true} />
          <Helmet title={`404 Page Not Found`} />
          <Container
            mx={['2rem', '2rem', '2rem', 'auto']}
            mt={['2rem', '4rem']}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Caps>The page you are browsing is not there! </Caps>
            <Img
              fluid={data.notFoundImage.childImageSharp.fluid}
              style={{
                width: '320px',
              }}
            />
            <ButtonLink to="/">Back Home</ButtonLink>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)
