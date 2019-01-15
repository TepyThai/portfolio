import React from 'react'
import styled from 'styled-components'
import Caps from '../base-components/Caps'
import SplitText from 'react-pose-text'

const Title = styled(Caps)`
  text-transform: capitalize;
  font-size: 2rem;
  position: relative;
  /* color: ${p => p.theme.colors.black}; */
  /* text-align: left; */
  margin: 2rem 2rem;
  padding: 0.5rem 2rem;
  text-shadow: 1px -2px ${p => p.theme.colors.darkYellow};
  font-weight: bold;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    height: 50%;
    width: 50%;
    background: ${p =>
      `linear-gradient(to right, ${p.theme.colors.darkYellow}, ${
        p.theme.colors.darkRed
      })`};
    transform: skewX(-30deg);
    z-index: -1;
    /* box-shadow: 4px -4px ${p => p.theme.colors.teal}; */
    animation: move-title .5s 1 0s ease-in-out;
    /* text-align: center; */
  }
  
  @keyframes move-title{
    0%{
        transform: skewX(-30deg) scale(2.5) translateX(0) translateY(0);
        opacity: 0;
        }
    50%{
        transform: skewX(-30deg) ;
        }
    100%{
        transform: skewX(-30deg) scale(1);
        opacity: 1;
        }
  }

`

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30,
  },
}

const SectionTitle = ({ children, ...other }) => (
  <Title {...other}>
    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
      {children}
    </SplitText>
  </Title>
)

export default SectionTitle
