import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
import Tooltip from './Tooltip'
import omit from '../utils/omit'
import cx from 'classnames'

export default class Field extends PureComponent {
  get label () {
    if (!this.props.label) return null
    return <label className='rx-label' children={this.props.label} />
  }
  get tooltip () {
    if (!this.props.tooltip) return null
    return <Tooltip children={this.props.tooltip} />
  }
  get info () {
    if (!this.props.info) return null
    return <div className='rx-field__info' children={this.props.info} />
  }
  render () {
    const props = omit(
      this.props,
      'className',
      'label',
      'children',
      'tooltip',
      'info'
    )
    const className = cx('rx-field', this.props.className)
    return (
      <div {...props}
        className={className}>
        {this.label}
        {this.info}
        {this.tooltip}
        {this.props.children}
      </div>
    )
  }
}

// Field.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.instanceOf(Select),
//     PropTypes.instanceOf(Input),
//     PropTypes.instanceOf(InputGroup),
//     PropTypes.instanceOf(RadioGroup),
//     PropTypes.instanceOf(CheckboxGroup)
//     // TODO: TextArea + FileUpload
//   ])
// }
