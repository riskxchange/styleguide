import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Tooltip extends PureComponent {
  constructor (props) {
    super(props)
    this.toggleActive = this.toggleActive.bind(this)
    this.state = { active: false }
  }
  toggleActive () {
    this.setState((state) => ({ active: !state.active }))
  }
  get className () {
    return cx('rx-tooltip', {
      'rx-tooltip--active': this.state.active
    })
  }
  render () {
    const props = omit(this.props, 'className')
    return (
      <div {...props} className={this.className}>
        <button className='rx-tooltip__icon' onClick={this.toggleActive}>?</button>
        <div className='rx-tooltip__message'>{this.props.children || this.props.text}</div>
      </div>
    )
  }
}
