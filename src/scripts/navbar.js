import forEach from './forEach'

export function init () {
  var menuToggle = document.querySelector('.rx-navbar__menu-toggle')
  var searchToggle = document.querySelector('.rx-navbar__searchbar-toggle')
  var navbar = document.querySelector('.rx-navbar')
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navbar.classList.remove('rx-navbar--searchbar-visible')
      navbar.classList.toggle('rx-navbar--menu-visible')
    })
    forEach(document.querySelectorAll('.rx-navbar__menu .rx-navbar__links'), (el) => {
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
