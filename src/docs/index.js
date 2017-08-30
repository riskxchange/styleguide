/* globals fetch, html_beautify */
import './react'
import './index.css'
import '../styles/index.css'
import '../scripts/index.js'

const ICON_VERSION = '0.2.4'

console.log('--> init')

document.onreadystatechange = init
init()
initIcons()

function init () {
  console.log('[demo] init:', document.readyState)
  if (document.readyState === 'loading') return
  if (window.loaded) return
  window.loaded = true
  var pages = document.querySelectorAll('[rx-page]')
  var pageToSections = {}
  var sectionToPages = {}
  var navbarLinks = []
  var subnav = document.querySelector('.rx-subnav')
  var subnavLinks = subnav.querySelector('.rx-subnav__links')
  var navbar = document.querySelector('.rx-navbar')
  var navbarContainer = navbar.querySelector('.rx-container')

  document.querySelector('[rx-toggle-navbar]').onclick = function () {
    navbarContainer.classList.toggle('rx-container')
    navbarContainer.classList.toggle('rx-container--no-pad')
  }

  pages.forEach(function (page, i) {
    var h1 = page.querySelector('h1').cloneNode()
    h1.innerHTML = page.querySelector('h1').innerHTML
    if (h1.querySelector('code')) h1.querySelector('code').innerText = ''
    var title = h1.innerText
    var id = page.getAttribute('rx-page')
    var el = document.createElement('a')
    el.className = 'rx-navbar__link'
    el.innerText = title
    el.href = '#' + id
    var sectionEls = page.querySelectorAll('[rx-section]')
    if (sectionEls) {
      var sections = Array.from(sectionEls)
      pageToSections[id] = sections
      sections.forEach((section) => {
        var id = section.getAttribute('rx-section')
        section.setAttribute('id', id)
        sectionToPages[id] = page
      })
    }
    navbarLinks.push(el)
    document.querySelector('.rx-navbar__links').appendChild(el)

    var hash = window.location.hash.replace('#', '')
    page.setAttribute('style', 'display: none;')

    if (!hash ? i === 0 : (
      id === hash ||
      (sectionToPages[hash] && sectionToPages[hash].getAttribute('rx-page') === id)
    )) {
      el.classList.add('rx-navbar__link--active')
      page.setAttribute('style', 'display: block;')
      initSubnav(id, hash)
    }
  })

  navbarLinks.forEach((link) => {
    link.onclick = function (e) {
      var id = e.target.href.split('#')[1]
      pages.forEach((page) => {
        if (page.getAttribute('rx-page') === id) {
          page.setAttribute('style', 'display: block;')
        } else {
          page.setAttribute('style', 'display: none;')
        }
      })
      document.querySelector('.rx-navbar__link--active').classList.remove('rx-navbar__link--active')
      document.querySelector(`[href="#${id}"]`).classList.add('rx-navbar__link--active')
      initSubnav(id)
    }
  })

  function initSubnav (pageId, hash) {
    try {
      var sections = pageToSections[pageId]
      if (!sections.length) {
        subnav.setAttribute('style', 'display: none;')
        document.body.classList.remove('rx-utils--body-has-subnav')
      } else {
        subnav.setAttribute('style', 'display: block;')
        document.body.classList.add('rx-utils--body-has-subnav')
      }
      subnavLinks.innerHTML = ''
      sections.forEach((section, i) => {
        var id = section.getAttribute('rx-section')
        var title = section.querySelector('h2').innerText
        var el = document.createElement('a')
        el.className = 'rx-subnav__link'
        el.innerText = title
        el.href = '#' + id
        if (hash ? id === hash : i === 0) {
          el.classList.add('rx-subnav__link--active')
        }
        el.onclick = function () {
          subnav.querySelector('.rx-subnav__link--active').classList.remove('rx-subnav__link--active')
          el.classList.add('rx-subnav__link--active')
        }
        subnavLinks.appendChild(el)
      })
    } catch (err) {
      console.error(pageId, hash)
      throw err
    }
  }
}

function initIcons () {
  var linkTag = document.createElement('link')
  linkTag.setAttribute('rel', 'stylesheet')
  linkTag.setAttribute('href', 'https://cdn.rawgit.com/riskxchange/icons/' + ICON_VERSION + '/dist/main.min.css')
  document.body.parentNode.querySelector('head').appendChild(linkTag)
  document.querySelector('[rx-icon-version]').innerText = 'v' + ICON_VERSION
  fetch('https://cdn.rawgit.com/riskxchange/icons/' + ICON_VERSION + '/dist/icons.json')
  .then((res) => res.json())
  .then((json) => {
    var data = Object.keys(json)
    var div = document.createElement('div')
    div.className = 'rx-card rx-utils--clearfix'
    data.forEach((icon) => (
      div.innerHTML += `
        <div class="rx-col--sm-3 rx-col--xs-6">
          <div rx-icon-example>
            <i class="rx-icon rx-icon--${icon}"></i>
            <code>${icon}</code>
          </div>
        </div>
      `)
    )
    document.querySelector('[rx-page=icons]').appendChild(div)
    // init code examples
    document.querySelectorAll('[rx-section], [rx-page=icons]').forEach(function (el) {
      var clone = el.cloneNode()
      clone.innerHTML = el.innerHTML
      var h2 = clone.querySelectorAll('h1, h2, [rx-description]')
      h2.forEach(function (el) { el.parentNode.removeChild(el) })
      var codeSample = document.createElement('pre')
      codeSample.innerText = html_beautify(clone.innerHTML)
      el.appendChild(codeSample)
    })
  })
}
