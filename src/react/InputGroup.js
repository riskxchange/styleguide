import React, {PureComponent} from 'react'
import Input from './Input'
import Icon from './Icon'
import cx from 'classnames'
import omit from '../utils/omit'
import PropTypes from 'prop-types'

export default class InputGroup extends PureComponent {
  get className () {
    return cx('rx-input-group', {
      'rx-btn--blocked': this.props.blocked,
      [`rx-btn--${this.props.variant}`]: this.props.variant,
      'rx-btn--disabled': this.props.disabled
    })
  }
  get box () {
    const icon = this.props.boxIcon
    const text = this.props.boxText
    return (
      <div className='rx-input-group__icon'>
        {icon ? <Icon name={icon} /> : text}
      </div>
    )
  }
  get boxLeft () {
    return this.props.boxPosition === 'left' ? this.box : null
  }
  get boxRight () {
    return this.props.boxPosition === 'right' ? this.box : null
  }
  get input () {
    const props = omit(
      this.props,
      'className',
      'boxIcon',
      'boxPosition',
      'boxText'
    )
    return <Input {...props} />
  }
  render () {
    return (
      <div className={this.className}>
        {this.boxLeft}
        {this.input}
        {this.boxRight}
      </div>
    )
  }
}

InputGroup.propTypes = {
  boxIcon: PropTypes.string,
  boxPosition: PropTypes.oneOf(['left', 'right']),
  boxText: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'success']),
  disabled: PropTypes.bool,
  blocked: PropTypes.bool
}

InputGroup.defaultProps = {
  boxPosition: 'left'
}
