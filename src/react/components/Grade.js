import React from 'react'
import cx from 'classnames'

export default function Grade ({large, children}) {
  const str = children ? children.toLowerCase().replace(/[^a-z]/g, '') : 'wip'
  const className = cx('rx-grade', `rx-grade--${str}`, { 'rx-grade--large': large })
  return <div className={className}>{children}</div>
}
