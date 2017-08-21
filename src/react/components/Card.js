import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Card extends PureComponent {
  get className () {
    return cx('rx-card', {
      'rx-card--clickable': this.props.clickable || this.props.onClick
    }, this.props.className)
  }
  get footer () {
    if (!this.props.footer) return null
    const className = cx('rx-card__footer', {
      'rx-card__footer--large': this.props.largeFooter
    })
    if (this.props.footer) {
      return <div className={className} children={this.props.footer} />
    }
  }
  render () {
    const props = omit(
      this.props,
      'className',
      'children',
      'footer',
      'largeFooter'
    )
    return (
      <div {...props} className={this.className}>
        {this.props.children}
        {this.footer}
      </div>
    )
  }
}
