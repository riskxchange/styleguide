import React from 'react'

const DEFAULT_LOGO = 'https://riskxchange.imgix.net/logos/default-logo.png'

export default function CompanyLogo ({ name, logoUrl, width, w, ...rest }) {
  const src = (logoUrl || DEFAULT_LOGO) + (width ? `?w=${width}&h=${width}` : '')
  return <img src={src} alt='' {...rest} />
}
