import React from 'react'
import cx from 'classnames'

export default function Logo ({ inverse }) {
  const className = cx('rx-logo', {
    'rx-logo--inverse': inverse
  })
  return <div className={className} />
}
