import React from 'react'
import { Flex, Box } from 'rebass'
import BaseCard from '../base-components/BaseCard'
import SmCaps from '../base-components/SmCaps'
import Caps from '../base-components/Caps'
import ImageCenter from '../base-components/ImageCenter'
import PropTypes from 'prop-types'
import Divider from '../base-components/Divider'
import Img from 'gatsby-image'
import ButtonLink from '../base-components/ButtonLink'
const ProjectCard = ({
  bgImage,
  variant,
  title,
  logoPaths,
  descriptions,
  children,
  imageData,
  detailLink,
  ...other
}) => (
  <BaseCard maxWidth="460px" variant={variant} {...other} asBackground>
    {children}
    <Caps>{title}</Caps>
    <Flex p={1} m={1}>
      <SmCaps>Stack: </SmCaps>
      <Box mx="auto" my={0} />
      {logoPaths.map((logo, index) => (
        <ImageCenter src={logo} key={descriptions[index].text} />
      ))}
    </Flex>
    <Divider />
    {descriptions.map(description => (
      <SmCaps inline key={description.text}>
        <ImageCenter src={description.logoSrc} />
        {description.text}
      </SmCaps>
    ))}
    <ButtonLink to={detailLink}>Read details</ButtonLink>
    <Img
      fluid={imageData}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -2,
      }}
    />
  </BaseCard>
)

ProjectCard.propTypes = {
  bgImage: PropTypes.string,
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logoPaths: PropTypes.array,
  descriptions: PropTypes.array,
}

export default ProjectCard
