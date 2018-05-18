import React from 'react'

export default function Icon ({ name, type, variant }) {
  return (
    <span className={`rx-icon rx-icon--${type || variant || name}`} />
  )
}
