import React from 'react'

export default function CompanyLogo ({ name, logoUrl, width, w, ...rest }) {
  const src = (logoUrl || '/assets/images/default-logo.png') + width ? `?w=${width}&h=${width}` : ''
  return <img src={src} alt='' {...rest} />
}
