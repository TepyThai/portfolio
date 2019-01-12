import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { ButtonLinkWrapper } from '../base-components/ButtonLink'
import Img from 'gatsby-image'
import { Flex } from 'rebass'
import theme from '../utils/theme'

const introImageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerBgImage: file(relativePath: { eq: "header-bg.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 663) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubImage: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fluid(maxHeight: 32) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twitterImage: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fluid(maxHeight: 32) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wantedlyImage: file(relativePath: { eq: "wantedly.png" }) {
      childImageSharp {
        fluid(maxHeight: 32) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SocialLinks = props => (
  <StaticQuery
    query={introImageQuery}
    render={data => (
      <Flex alignItems="center" justifyContent="center">
        <ButtonLinkWrapper
          width={32}
          borderRadius={9999}
          bg={theme.colors.lightGray}
          p={1}
          mt={0}
          mx={3}
          as="a"
          href="https://github.com/TepyThai"
          target="_blank"
          rel="noopener noreferrer"
          isfullwidth="false"
        >
          <Img fluid={data.githubImage.childImageSharp.fluid} />
        </ButtonLinkWrapper>
        <ButtonLinkWrapper
          width={32}
          borderRadius={9999}
          bg={theme.colors.lightGray}
          p={1}
          mt={0}
          mx={3}
          as="a"
          href="https://twitter.com/TepyThai"
          target="_blank"
          rel="noopener noreferrer"
          isfullwidth="false"
        >
          <Img fluid={data.twitterImage.childImageSharp.fluid} />
        </ButtonLinkWrapper>
        <ButtonLinkWrapper
          width={32}
          borderRadius={9999}
          bg={theme.colors.lightGray}
          p={1}
          mt={0}
          mx={3}
          as="a"
          href="https://www.wantedly.com/users/21217465"
          target="_blank"
          rel="noopener noreferrer"
          isfullwidth="false"
        >
          <Img
            fluid={data.wantedlyImage.childImageSharp.fluid}
            style={{ height: 24, width: 24, borderRadius: 999 }}
          />
        </ButtonLinkWrapper>
      </Flex>
    )}
  />
)

export default SocialLinks
