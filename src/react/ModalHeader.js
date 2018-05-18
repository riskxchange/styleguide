import React, {PureComponent} from 'react'

export default class ModalHeader extends PureComponent {
  render () {
    return <div className='rx-modal__header'>{this.props.children}</div>
  }
}
