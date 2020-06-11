import React from 'react'
import EmailLink from './EmailLink'

const DEFAULT_ERROR_MSG = 'An unknown error occured'

export default function ErrorPage ({eventId}) {
  const ref = typeof eventId === 'string' ? `${eventId}` : ''
  const errorMessage = ref ? <span>Error reference <b>{ref}</b></span> : null
  return (
    <div className='rx-error-page rx-container'>
      <div className='rx-grid'>
        <div className='rx-col--md-6 rx-col--md-offset-3'>
          <div className='rx-card'>
            <h1>Oops... Something went wrong</h1>
            <p>Our development team has been notified.</p>
            <p>For support on this error, please contact <EmailLink subject={`Error Ref: ${ref || 'N/A'}`}>support@riskxchange.co</EmailLink> {errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
