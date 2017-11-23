import {init as initModal} from './modal.js'
import {init as initNavbar} from './navbar.js'
import {init as initTooltip} from './tooltip.js'

function init () {
  console.log('[styleguide] init:', document.readyState)
  if (document.readyState === 'loading') return
  console.log('index.js')
  initNavbar()
  initModal()
  initTooltip()
}

document.addEventListener('DOMContentLoaded', init)
