import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'
import PropTypes from 'prop-types'

export default class Select extends PureComponent {
  get className () {
    return cx('rx-select', {
      'rx-select--blocked': this.props.blocked,
      [`rx-select--${this.props.variant}`]: this.props.variant,
      'rx-select--disabled': this.props.disabled
    }, this.props.className)
  }
  get options () {
    return this.props.options.map((option) => {
      const props = omit(option, 'text', 'selected')
      return <option children={option.text} {...props} key={option.value} />
    })
  }
  get value () {
    return this.props.options.reduce((value, option) => (
      option.selected ? option.value : value
    ), '')
  }
  render () {
    const props = omit(this.props, 'className', 'children', 'options')
    return (
      <select {...props} className={this.className} value={this.value}>
        <option>Select...</option>
        {this.options}
      </select>
    )
  }
}

Select.propTypes = {
  variant: PropTypes.oneOf(['error', 'success']),
  disabled: PropTypes.bool,
  blocked: PropTypes.bool
}

Select.defaultProps = {
  onChange: (e) => { console.warn('Please set onChange handler for Select component') }
}
