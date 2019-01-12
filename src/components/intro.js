import PropTypes from 'prop-types'
import React from 'react'
import Caps from '../base-components/Caps'
import SmCaps from '../base-components/SmCaps'
import { Flex, Card } from 'rebass'
import { ButtonLinkWrapper } from '../base-components/ButtonLink'
import ImageCenter from '../base-components/ImageCenter'
import { ReactLogo, GraphqlLogo } from '../images/logos'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Container from '../base-components/Container'
import ButtonScroll from '../base-components/ButtonScroll'
import SocialLinks from './social-links'

const BgCard = styled(Card)`
  :before {
    content: '';
    width: 100%;
    height: 98%;
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    );
    z-index: -1;
  }
`

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

const Intro = ({ siteTitle, menuTitle }) => (
  <StaticQuery
    query={introImageQuery}
    render={data => (
      <React.Fragment>
        <BgCard
          width={[1]}
          p={4}
          mb={4}
          variant="backgroundImage"
          style={{
            position: 'relative',
          }}
        >
          <Img
            fluid={data.headerBgImage.childImageSharp.fluid}
            style={{
              width: '100%',
              height: '98%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -2,
            }}
          />
          <Container>
            <Flex
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              p={1}
              width={[1]}
            >
              <Flex
                width={[1, 1, 2 / 3]}
                ml={[0, 'auto']}
                pl={[0, 1, 4]}
                flexDirection="column"
              >
                <Flex flexDirection="column" justifyContent="center">
                  <Caps
                    fontWeight="bold"
                    fontSize="5"
                    mb={4}
                    letterSpacing="0.1rem"
                    lineHeight={['40px', '30px']}
                  >
                    {siteTitle}
                  </Caps>
                  <SmCaps p="0">
                    <h3> Web Developer</h3>
                    <ImageCenter src={ReactLogo} />
                    <ImageCenter src={GraphqlLogo} />
                  </SmCaps>
                  <SmCaps p="0">
                    Build Elegant Looking + Swiftly Functional Products
                  </SmCaps>
                  <SmCaps p="0" inline>
                    From{' '}
                    <span role="img" aria-label="cambodia flag and airplane">
                      🇰🇭 ✈️️️️️️️✈️✈️✈️✈️
                    </span>
                  </SmCaps>{' '}
                  <SmCaps p="0" inline>
                    {' '}
                    Studying in{' '}
                    <span role="img" aria-label="japanese flag">
                      🇯🇵
                    </span>
                  </SmCaps>
                </Flex>
              </Flex>

              <Flex width={[1, 1, 1 / 3]} mt={4} justifyContent="center">
                <Card
                  border="4px solid white"
                  p={1}
                  borderRadius={999}
                  boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                >
                  <Img
                    fluid={data.profileImage.childImageSharp.fluid}
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: 200,
                    }}
                  />
                </Card>
              </Flex>
              <ButtonLinkWrapper>
                <ButtonScroll
                  block={true}
                  as="a"
                  href="mailto:thaitepy@gmail.com"
                  target="_blank"
                  isfullWidth={true}
                >
                  Contact Me
                </ButtonScroll>
              </ButtonLinkWrapper>
            </Flex>

            <Flex
              flexDirection="column"
              my={2}
              p={2}
              alignItems="center"
              justifyContent="center"
            >
              <SmCaps block>Or you can find me on: </SmCaps>
              <SocialLinks />
            </Flex>
          </Container>
        </BgCard>
      </React.Fragment>
    )}
  />
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
  menuTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: '',
  menuTitle: '',
}

export default Intro
