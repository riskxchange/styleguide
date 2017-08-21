import React, {PureComponent} from 'react'

export default class FormActions extends PureComponent {
  render () {
    return (
      <div className='rx-form__actions' children={this.props.children} />
    )
  }
}
