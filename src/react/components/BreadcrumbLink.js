import React from 'react'
import BaseLink from './BaseLink'

export default function BreadcrumbLink ({ children, text, ...rest }) {
  const props = {
    className: 'rx-breadcrumb__link',
    children: children || text,
    ...rest
  }
  return <BaseLink {...props} />
}
