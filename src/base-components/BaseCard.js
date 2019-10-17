import styled from 'styled-components'
import { Card } from 'rebass/styled-components'
import PropTypes from 'prop-types'

const BaseCard = styled(Card)`
  max-width: ${props => props.maxWidth || '350px'};
  min-height: ${props => props.minHeight || '250px'};
  height: ${props => props.cardHeight || 'auto'};
  position: relative;
  transition: all 0.55s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :before {
    z-index: -1;
    content: '';
    background-color: ${p =>
      p.asBackground ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
    width: ${p => (p.asBackground ? '100%' : '150%')};
    height: ${p => (p.asBackground ? '100%' : '150%')};
    border-radius: ${p => (p.asBackground ? '0' : '50%')};
    position: absolute;
    top: 0%;
    left: ${p => (p.asBackground ? '0' : '-110%')};
    transform: ${p => (p.asBackground ? 'none' : 'rotate(45deg)')};
    transition: ${p =>
      p.asBackground
        ? 'none'
        : 'all 0.55s cubic-bezier(0.31, -0.105, 0.43, 1.59)'};
  }
  :focus:before,
  :hover:before {
    top: ${p => (p.asBackground ? '0' : '-20%')};
    left: ${p => (p.asBackground ? '0' : '-20%')};
  }
`

BaseCard.defaultProps = {
  p: 4,
  py: 4,
  m: 3,
  borderRadius: 10,
  boxShadow: 'extra',
  // width: [1, '400', 1],
}

BaseCard.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default BaseCard
