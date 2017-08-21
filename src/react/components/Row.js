import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Column from './Column'
import omit from '../utils/omit'
import cx from 'classnames'

export default class Row extends PureComponent {
  get className () {
    return cx('rx-row', {
      'rx-row--no-pad': this.props.noPad
    }, this.props.className)
  }
  render () {
    const props = omit(this.props, 'className')
    return (
      <div
        {...props}
        className={this.className} />
    )
  }
}
//
// Row.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.instanceOf(Column))
// }
