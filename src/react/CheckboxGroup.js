import React, {PureComponent} from 'react'
import omit from '../utils/omit'

class Checkbox extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (e) {
    this.props.onChange(e, this.props)
  }
  render () {
    const props = omit(this.props, 'onChange', 'className', 'type', 'checked', 'selected')
    return (
      <input
        {...props}
        checked={this.props.selected}
        type='checkbox'
        className='rx-checkbox'
        onChange={this.onChangeHandler} />
    )
  }
}

export default class CheckboxGroup extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (e, option) {
    this.props.onChange(e, option)
  }
  get checkboxes () {
    return this.props.options.map((option, i) => (
      <label key={i}>
        <Checkbox name={this.props.name} {...option} onChange={this.onChangeHandler} />
        {option.text}
      </label>
    ))
  }
  render () {
    const props = omit(this.props, 'onChange', 'className', 'options')
    return (
      <div
        {...props}
        className='rx-checkbox-group'
        children={this.checkboxes} />
    )
  }
}
