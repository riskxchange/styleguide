import React, {PureComponent} from 'react'
import omit from '../utils/omit'
import Button from './Button'
import FormActions from './FormActions'
import cx from 'classnames'

export default class Form extends PureComponent {
  get actions () {
    if (!this.props.actions || !this.props.actions.length) return null
    const children = this.props.actions.map((action, i) => {
      const props = omit(action, 'children', 'text')
      return (
        <Button {...props} key={i}>
          {this.props.children || this.props.text}
        </Button>
      )
    })
    return <FormActions children={children} />
  }
  get title () {
    if (!this.props.title) return null
    return <h2 className='rx-form__title'>{this.props.title}</h2>
  }
  render () {
    const props = omit(this.props, 'className', 'children', 'title', 'actions')
    const className = cx('rx-form', this.props.className)
    return (
      <div className={className} {...props}>
        {this.title}
        {this.props.children}
        {this.actions}
      </div>
    )
  }
}
