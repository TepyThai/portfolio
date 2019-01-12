import React from 'react'
import TimelineCard from './timeline-card'
import TimelineCardContent from './timeline-card-content'
import GridContainer from '../base-components/GridContainer'
import { Element } from 'react-scroll'
import { myBio } from '../data/bio'
import SectionTitle from './section-title'

class About extends React.Component {
  renderCardContent = contents => {
    return (
      <React.Fragment>
        {contents.map(content => (
          <TimelineCardContent
            emoji={content.emoji}
            emojiLabel={content.emojiLabel}
            key={content.text}
          >
            {content.text}
          </TimelineCardContent>
        ))}
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Element name="scroll-to-about">
          <SectionTitle fontSize={6} p={2} m={2} textAlign="center">
            About Me
          </SectionTitle>
          <GridContainer>
            {myBio.map(bio => (
              <TimelineCard
                startYear={bio.startYear}
                endYear={bio.endYear}
                key={bio.endYear}
              >
                {this.renderCardContent(bio.contents)}
              </TimelineCard>
            ))}
          </GridContainer>
        </Element>
      </React.Fragment>
    )
  }
}

export default About
