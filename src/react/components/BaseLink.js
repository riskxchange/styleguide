import React from 'react'

global.BaseLink = global.BaseLink || function (props) {
  return <a {...props} />
}

export default (props) => <global.BaseLink {...props} />
