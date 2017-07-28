import {init as initModal} from './modal.js'
import {init as initNavbar} from './navbar.js'
import {init as initTooltip} from './tooltip.js'

function init () {
  console.log('[styleguide] init:', document.readyState)
  if (document.readyState === 'loading') return
  initNavbar()
  initModal()
  initTooltip()
}

document.onreadystatechange = init
init()
