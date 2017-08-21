import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Container from './Container'

export default class Subnav extends PureComponent {
  constructor (props) {
    super(props)
    this.getLink = this.getLink.bind(this)
  }
  getLink ({ href, text, active }, i) {
    const className = cx('rx-subnav__link', {
      'rx-subnav__link--active': active
    })
    return <a className={className} href={href} key={i}>{text}</a>
  }
  get links () {
    return (
      <div className='rx-subnav__links'>
        {this.props.links.map(this.getLink)}
      </div>
    )
  }
  get inner () {
    return (
      <div>
        {this.logo}
        {this.menu}
      </div>
    )
  }
  get container () {
    return <Container noPad children={this.links} />
  }
  render () {
    return (
      <nav className='rx-subnav'>
        { this.props.fullWidth ? this.links : this.container }
      </nav>
    )
  }
}

Subnav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.any,
    active: false
  })).isRequired
}
