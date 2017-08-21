import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Button extends PureComponent {
  get className () {
    return cx('rx-btn', {
      'rx-btn--blocked': this.props.blocked,
      [`rx-btn--${this.props.variant}`]: this.props.variant,
      'rx-btn--disabled': this.props.disabled
    }, this.props.className)
  }
  get link () {
    const props = omit(this.props, 'disabled', 'className')
    return (
      <a {...props} className={this.className} />
    )
  }
  get button () {
    const props = omit(this.props, 'disabled', 'className', 'variant')
    const disabled = this.props.disabled
    return (
      <button {...props} className={this.className} disabled={disabled} />
    )
  }
  render () {
    return this.props.href ? this.link : this.button
  }
}
