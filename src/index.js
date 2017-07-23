require('./styles/index.css')

document.onreadystatechange = function () {
  if (document.readyState !== 'complete') return
  // navbar
  var menuToggle = document.querySelector('.rx-navbar__menu-toggle')
  var menu = document.querySelector('.rx-navbar__menu')
  menuToggle.onclick = function () {
    menu.classList.toggle('rx-navbar__menu--mobile-visible')
  }
  // modals
  document.querySelectorAll('.rx-modal').forEach(function (modal) {
    var modalName = modal.getAttribute('modal')
    var openButtons = document.querySelectorAll(`.rx-btn[modal="${modalName}"]`)
    var closeBtn = modal.querySelector('[close-modal]')
    var container = modal.querySelector('.rx-modal__container')
    var modalBody = modal.querySelector('.rx-modal__body')
    var modalFooter = modal.querySelector('.rx-modal__footer')
    openButtons.forEach((btn) => { btn.onclick = () => openModal(modal) })
    closeBtn.onclick = () => closeModal(modal)
    // if modal has `do-not-dismiss` attribute, do not allow it to be dismissed
    // by clicking on the background
    if (modal.hasAttribute('do-not-dismiss')) return
    container.onclick = () => closeModal(modal)
    modalBody.onclick = (e) => e.stopPropagation()
    modalFooter.onclick = (e) => e.stopPropagation()
  })
}

function openModal (modal) {
  console.log(modal)
  modal.classList.add('rx-modal--active')
  document.body.classList.add('rx-utils--no-scroll')
}

function closeModal (modal) {
  modal.classList.remove('rx-modal--active')
  document.body.classList.remove('rx-utils--no-scroll')
}
