import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Container from './Container'
import Logo from './Logo'

export default class Navbar extends PureComponent {
  constructor (props) {
    super(props)
    this.getLink = this.getLink.bind(this)
  }
  getLink ({ href, text, active }, i) {
    const className = cx('rx-navbar__link', {
      'rx-navbar__link--active': active
    })
    return <a className={className} href={href} key={i}>{text}</a>
  }
  get menu () {
    return (
      <div className='rx-navbar__menu'>
        <div className='rx-navbar__links'>
          {this.props.links.map(this.getLink)}
        </div>
      </div>
    )
  }
  get logo () {
    const homepage = this.props.homepage || '/'
    return (
      <a className='rx-navbar__logo' href={homepage}>
        <Logo inverse />
      </a>
    )
  }
  get button () {
    return (
      <button className='rx-navbar__menu-toggle'>
        <span className='rx-icon rx-icon--menu-toggle' />
      </button>
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
    return <Container noPad children={this.inner} />
  }
  render () {
    return (
      <nav className='rx-navbar'>
        { this.props.fullWidth ? this.inner : this.container }
      </nav>
    )
  }
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.any,
    active: false
  })).isRequired
}
