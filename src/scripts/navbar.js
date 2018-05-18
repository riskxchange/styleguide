import forEach from './forEach'

export function init () {
  var navbar = document.querySelector('.rx-navbar[navbar]')
  var menuToggle = navbar.querySelector('.rx-navbar__menu-toggle')
  var searchToggle = navbar.querySelector('.rx-navbar__searchbar-toggle')
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navbar.classList.remove('rx-navbar--searchbar-visible')
      navbar.classList.toggle('rx-navbar--menu-visible')
    })
    forEach(navbar.querySelectorAll('.rx-navbar__menu .rx-navbar__links'), (el) => {
      el.addEventListener('click', function (el) {
        navbar.classList.remove('rx-navbar--menu-visible')
      })
    })
  }
  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      navbar.classList.remove('rx-navbar--menu-visible')
      navbar.classList.toggle('rx-navbar--searchbar-visible')
    })
  }
}
