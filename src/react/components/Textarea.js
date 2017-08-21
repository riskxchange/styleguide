import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Input extends PureComponent {
  get className () {
    return cx('rx-textarea', {
      'rx-textarea--blocked': this.props.blocked,
      [`rx-textarea--${this.props.variant}`]: this.props.variant,
      'rx-textarea--disabled': this.props.disabled
    })
  }
  render () {
    const props = omit(this.props, 'type', 'className')
    return (
      <textarea {...props} className={this.className} />
    )
  }
}
