import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import GridContainer from '../base-components/GridContainer'
import ProjectCard from './project-card'
import SectionTitle from './section-title'
import { projectDatas } from '../data/project-datas'

import { Element } from 'react-scroll'
class Projects extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            portfolioSiteBg: file(relativePath: { eq: "header-image.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            projectCardBg2: file(relativePath: { eq: "card-bg-2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Element name="scroll-to-projects">
              <SectionTitle fontSize={6} p={2} m={2} textAlign="center">
                Projects
              </SectionTitle>
              <GridContainer>
                {projectDatas.map(projectData => (
                  <ProjectCard
                    key={projectData.imagePathName}
                    variant="backgroundImage"
                    title={projectData.projectName}
                    logoPaths={projectData.logoPaths}
                    descriptions={projectData.descriptions}
                    detailLink={projectData.detailLink}
                    imageData={
                      data[projectData.imagePathName].childImageSharp.fluid
                    }
                    bgImageAlt={projectData.imagePathName}
                  />
                ))}
              </GridContainer>
            </Element>
          </React.Fragment>
        )}
      />
    )
  }
}

export default Projects
