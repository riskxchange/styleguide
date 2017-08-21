import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Breadcrumb extends PureComponent {
  get className () {
    return cx('rx-breadcrumb', this.props.className)
  }
  get links () {
    return this.props.links.map((link, i) => {
      return <a className='rx-breadcrumb__link' href={link.href} key={i}>{link.text}</a>
    })
  }
  render () {
    const props = omit(this.props, 'className', 'children', 'links')
    return (
      <div {...props} className={this.className}>
        {this.links}
      </div>
    )
  }
}
