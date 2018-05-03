import React from 'react'

export default function BreadcrumbLink ({ children, text, ...props }) {
  return <a className='rx-breadcrumb__link' {...props}>{children || text}</a>
}
