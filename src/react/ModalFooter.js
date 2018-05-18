import React, {PureComponent} from 'react'

export default class ModalFooter extends PureComponent {
  render () {
    return (
      <div className='rx-modal__footer'>{this.props.children}</div>
    )
  }
}
