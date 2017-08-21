import React, {PureComponent} from 'react'
import omit from '../utils/omit'

class Radio extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (e) {
    this.props.onChange(e, this.props)
  }
  render () {
    const props = omit(
      this.props,
      'onChange',
      'className',
      'type',
      'checked',
      'selected',
      'text'
    )
    return (
      <input
        {...props}
        checked={this.props.selected}
        type='radio'
        className='rx-radio'
        onChange={this.onChangeHandler} />
    )
  }
}

export default class RadioGroup extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (e, options) {
    this.props.onChange(e, options)
  }
  get radios () {
    return this.props.options.map((option, i) => (
      <label key={i}>
        <Radio name={this.props.name} {...option} onChange={this.onChangeHandler} />
        {option.text}
      </label>
    ))
  }
  render () {
    const props = omit(
      this.props,
      'onChange',
      'className',
      'options'
    )
    return (
      <div
        {...props}
        className='rx-radio-group'
        children={this.radios} />
    )
  }
}
