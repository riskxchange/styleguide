export function init () {
  document.querySelectorAll('.rx-tooltip').forEach((tooltip) => {
    tooltip.querySelector('.rx-tooltip__icon').onclick = () => {
      tooltip.classList.toggle('rx-tooltip--active')
    }
  })
}
