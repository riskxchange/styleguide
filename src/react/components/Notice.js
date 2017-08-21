import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Notice extends PureComponent {
  get className () {
    return cx('rx-notice', {
      [`rx-notice--${this.props.variant}`]: this.props.variant
    })
  }
  get icon () {
    if (!this.props.icon) return null
    return <span className={`rx-icon rx-icon--${this.props.icon}`} />
  }
  render () {
    const props = omit(this.props, 'className', 'variant', 'text', 'children')
    return (
      <div {...props} className={this.className}>
        {this.icon}
        {this.props.children || this.props.text}
      </div>
    )
  }
}
