/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)

document.onreadystatechange = init
init()

function init () {
  console.log('[styleguide] init:', document.readyState)
  if (document.readyState === 'loading') return
  initMenu()
  initModal()
  initTooltips()
}

function initMenu () {
  var menuToggle = document.querySelector('.rx-navbar__menu-toggle')
  var menu = document.querySelector('.rx-navbar__menu')
  menuToggle.onclick = function () {
    menu.classList.toggle('rx-navbar__menu--mobile-visible')
  }
}

function initModal () {
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

function initTooltips () {
  document.querySelectorAll('.rx-tooltip').forEach((tooltip) => {
    tooltip.querySelector('.rx-tooltip__icon').onclick = () => {
      tooltip.classList.toggle('rx-tooltip--active')
    }
  })
}

function openModal (modal) {
  modal.classList.add('rx-modal--active')
  document.body.parentNode.classList.add('rx-utils--no-scroll')
}

function closeModal (modal) {
  modal.classList.remove('rx-modal--active')
  document.body.parentNode.classList.remove('rx-utils--no-scroll')
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);