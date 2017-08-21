import React, {PureComponent} from 'react'
import cx from 'classnames'

export default class Menu extends PureComponent {
  constructor (props) {
    super(props)
    this.getLink = this.getLink.bind(this)
  }
  getLink ({ href, text, active }, i) {
    const className = cx('rx-menu__link', {
      'rx-menu__link--active': active
    })
    return <a className={className} href={href} key={i}>{text}</a>
  }
  get links () {
    return (
      <div className='rx-menu__links'>
        {this.props.links.map(this.getLink)}
      </div>
    )
  }
  render () {
    return (
      <nav className='rx-menu'>
        { this.links }
      </nav>
    )
  }
}
