import React, {PureComponent} from 'react'
import cx from 'classnames'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'

class Modal extends PureComponent {
  renderCloseBtn () {
    const cross = <span className='rx-icon rx-icon--cross' />
    if (!this.props.onClose) {
      console.warn('Missing close button for modal. Should provide `closeLink` or `onClose` prop.')
    }
    return <button className='rx-modal__close-btn' onClick={this.props.onClose} children={cross} />
  }
  render () {
    const className = cx('rx-modal', {
      'rx-modal--visible': this.props.active,
      'rx-modal--wide': this.props.wide,
      'rx-modal--scrollable': !this.props.noScroll
    }, this.props.className)
    return (
      <div className={className}>
        <div className='rx-modal__inner'>
          {this.renderCloseBtn()}
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
