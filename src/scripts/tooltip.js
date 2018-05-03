import forEach from './forEach'

export function init () {
  var tooltips = document.querySelectorAll('.rx-tooltip')
  forEach(tooltips, (tooltip) => {
    tooltip.querySelector('.rx-tooltip__icon').addEventListener('click', () => {
      tooltip.classList.toggle('rx-tooltip--active')
    })
  })
}
