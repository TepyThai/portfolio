import styled from 'styled-components'

const ImageCenter = styled.img`
  margin-bottom: 0;
  margin-left: 5px;
  align-self: center;
  src: ${p => p.src};
  padding-top: ${p => (p.large ? '10px' : 'auto')};
  display: ${p => (p.block ? 'block' : 'inline-block')};
`

ImageCenter.defaultProps = {
  width: '16px',
  height: '16px',
}

export default ImageCenter
