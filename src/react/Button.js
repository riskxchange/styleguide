import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'
import BaseLink from './BaseLink'

export default class Button extends PureComponent {
  get className () {
    return cx('rx-btn', {
      'rx-btn--blocked': this.props.blocked,
      [`rx-btn--${this.props.variant}`]: this.props.variant,
      'rx-btn--disabled': this.props.disabled
    }, this.props.className)
  }
  get cleanProps () {
    return omit(
      this.props,
      'disabled',
      'className',
      'blocked',
      'variant'
    )
  }
  renderLink () {
    const props = {
      ...this.cleanProps,
      className: this.className
    }
    return <BaseLink {...props} />
  }
  renderButton () {
    const disabled = this.props.disabled
    return (
      <button {...this.cleanProps} className={this.className} disabled={disabled} />
    )
  }
  render () {
    return (this.props.href || this.props.to) ? this.renderLink() : this.renderButton()
  }
}
