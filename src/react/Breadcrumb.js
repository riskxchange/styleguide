import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'
import BreadcrumbLink from './BreadcrumbLink'

class Breadcrumb extends PureComponent {
  get className () {
    return cx('rx-breadcrumb', this.props.className)
  }
  renderLinks () {
    if (!this.props.links) return this.props.children
    return this.props.links.map((link, i) => {
      return <BreadcrumbLink key={i}>{link.text}</BreadcrumbLink>
    })
  }
  render () {
    const props = omit(this.props, 'className', 'children', 'links')
    return (
      <div {...props} className={this.className}>
        {this.renderLinks()}
      </div>
    )
  }
}

Breadcrumb.Link = BreadcrumbLink

export default Breadcrumb
