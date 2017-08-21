import React, {PureComponent} from 'react'
import Icon from './Icon'
import cx from 'classnames'

export default class Modal extends PureComponent {
  constructor (props) {
    super(props)
    this.onCloseHandler = this.onCloseHandler.bind(this)
  }
  onCloseHandler (e) {
    this.props.onClose(e)
  }
  get title () {
    if (!this.props.title) return null
    return <div className='rx-modal__title'>{this.props.title}</div>
  }
  get closeBtn () {
    return (
      <button className='rx-modal__close-btn' onClick={this.onCloseHandler}>
        <Icon name='cross' />
      </button>
    )
  }
  get footer () {
    if (!this.props.footer) return null
    return <div className='rx-modal__footer' children={this.props.footer} />
  }
  get className () {
    return cx('rx-modal', {
      'rx-modal--active': this.props.open
    })
  }
  render () {
    return (
      <div className={this.className}>
        <div className='rx-modal__container'>
          <div className='rx-modal__body'>
            {this.closeBtn}
            {this.title}
            {this.children}
          </div>
          {this.footer}
        </div>
      </div>
    )
  }
}
