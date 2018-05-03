import React from 'react'
import cx from 'classnames'

export default function MenuItem ({ text, children, active, ...rest }) {
  const className = cx('rx-menu__item', {
    'rx-menu__item--active': active
  })
  return <a className={className} {...rest}>{children || text}</a>
}
