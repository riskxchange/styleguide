import React from 'react'
import cx from 'classnames'

export default function Loader ({ inverse, bg }) {
  const className = cx('rx-loader', {
    'rx-loader--inverse': inverse && !bg,
    'rx-loader--light-bg': !inverse && bg,
    'rx-loader--dark-bg': inverse && bg
  })
  return (
    <div className={className} />
  )
}
