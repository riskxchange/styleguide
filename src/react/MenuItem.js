import React from 'react'
import cx from 'classnames'
import BaseLink from './BaseLink'

export default function MenuItem ({ text, children, active, ...rest }) {
  const className = cx('rx-menu__item', {
    'rx-menu__item--active': active
  })
  const props = {
    ...rest,
    className,
    children: children || text
  }
  return <BaseLink {...props} />
}
