import React, {PureComponent} from 'react'
import cx from 'classnames'

export default class ModalBody extends PureComponent {
  render () {
    const className = cx('rx-modal__body', {
      'rx-utils--center': this.props.center
    })
    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
