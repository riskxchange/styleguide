import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
import omit from '../utils/omit'
import cx from 'classnames'

export default class Column extends PureComponent {
  get className () {
    return cx('rx-col', {
      [`rx-col--lg-${this.props.lg}`]: this.props.lg,
      [`rx-col--md-${this.props.md}`]: this.props.md,
      [`rx-col--sm-${this.props.sm}`]: this.props.sm,
      [`rx-col--xs-${this.props.xs}`]: this.props.xs,
      [`rx-col--lg-offset-${this.props.offsetLg}`]: this.props.offsetLg,
      [`rx-col--md-offset-${this.props.offsetMd}`]: this.props.offsetMd,
      [`rx-col--sm-offset-${this.props.offsetSm}`]: this.props.offsetSm,
      [`rx-col--xs-offset-${this.props.offsetXs}`]: this.props.offsetXs
    }, this.props.className)
  }
  render () {
    const props = omit(
      this.props,
      'className',
      'lg',
      'md',
      'sm',
      'xs',
      'offsetLg',
      'offsetMd',
      'offsetSm',
      'offsetXs'
    )
    return (
      <div
        {...props}
        className={this.className} />
    )
  }
}
