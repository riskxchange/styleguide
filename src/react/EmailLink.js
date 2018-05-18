import React from 'react'

export default function EmailLink ({ children, subject }) {
  return (
    <a href={`mailto:${children}?subject=${subject || ''}`}
      className='rx-link'>
      {children}
    </a>
  )
}
