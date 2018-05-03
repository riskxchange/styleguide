export function init () {
  var menuToggle = document.querySelector('.rx-navbar__menu-toggle')
  var menu = document.querySelector('.rx-navbar__menu')
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('rx-navbar__menu--mobile-visible')
    })
  }
}
