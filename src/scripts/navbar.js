export function init () {
  var menuToggle = document.querySelector('.rx-navbar__menu-toggle')
  var menu = document.querySelector('.rx-navbar__menu')
  menuToggle.onclick = function () {
    menu.classList.toggle('rx-navbar__menu--mobile-visible')
  }
}