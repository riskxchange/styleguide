import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Input extends PureComponent {
  get className () {
    return cx('rx-input', {
      'rx-input--blocked': this.props.blocked,
      [`rx-input--${this.props.variant}`]: this.props.variant,
      'rx-input--disabled': this.props.disabled
    })
  }
  render () {
    const type = this.props.type || 'text'
    const props = omit(this.props, 'type', 'className', 'variant', 'blocked')
    return (
      <input {...props} type={type} className={this.className} />
    )
  }
}
