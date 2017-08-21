import React, {PureComponent} from 'react'
import cx from 'classnames'
import omit from '../utils/omit'

export default class Container extends PureComponent {
  get className () {
    return cx('rx-container', {
      'rx-utils--no-pad': this.props.noPad
    }, this.props.className)
  }
  render () {
    const props = omit(this.props, 'className', 'noPad')
    return (
      <div {...props} className={this.className} />
    )
  }
}
