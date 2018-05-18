import forEach from '../utils/for-each'

export function init () {
  var modals = document.querySelectorAll('.rx-modal')
  forEach(modals, function (modal) {
    var modalName = modal.getAttribute('modal')
    var openButtons = document.querySelectorAll(`.rx-btn[modal="${modalName}"]`)
    var closeBtn = modal.querySelector('.rx-modal__close-btn')
    var inner = modal.querySelector('.rx-modal__inner')
    openButtons.forEach((btn) => { btn.onclick = () => openModal(modal) })
    if (closeBtn) {
      closeBtn.onclick = () => closeModal(modal)
    } else {
      console.warn('Missing close btn for modal:', modal)
    }
    // if modal has `do-not-dismiss` attribute, do not allow it to be dismissed
    // by clicking on the background
    if (modal.hasAttribute('do-not-dismiss')) return
    modal.addEventListener('click', () => { console.log('test'); closeModal(modal) })
    inner.addEventListener('click', (e) => e.stopPropagation())
  })
}

function openModal (modal) {
  modal.classList.add('rx-modal--visible')
  document.body.parentNode.classList.add('rx-utils--no-scroll')
}

function closeModal (modal) {
  modal.classList.remove('rx-modal--visible')
  document.body.parentNode.classList.remove('rx-utils--no-scroll')
}
