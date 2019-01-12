import React from 'react'
import { Events, scroller } from 'react-scroll'
import StyledButton from './StyledButton'

class ButtonScroll extends React.PureComponent {
  componentDidMount() {
    Events.scrollEvent.register('begin')
    Events.scrollEvent.register('end')
  }
  scrollTo = () => {
    scroller.scrollTo(this.props.scrollToName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: this.props.closeMenu ? -200 : -60,
    })

    this.props.closeMenu && this.props.closeMenu()
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render() {
    return (
      <StyledButton {...this.props} onClick={this.scrollTo}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default ButtonScroll
