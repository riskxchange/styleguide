/* globals fetch, html_beautify */

document.onreadystatechange = init
init()

function init () {
  console.log('[demo] init:', document.readyState)
  if (document.readyState === 'loading') return

  function fixAttr (el, attr) {
    if (window.location.host === 'riskxchange.github.io') {
      var rawGit = 'https://rawgit.com/riskxchange/styleguide/master/dist/'
      el.setAttribute(attr, rawGit + el.getAttribute('rx-' + attr))
    } else {
      el.setAttribute(attr, el.getAttribute('rx-' + attr))
    }
  }
  document.querySelectorAll('[rx-dist]').forEach(function (el) {
    if (el.tagName === 'SCRIPT') fixAttr(el, 'src')
    if (el.tagName === 'LINK') fixAttr(el, 'href')
  })

  var pages = document.querySelectorAll('[rx-page]')
  var pageToSections = {}
  var sectionToPages = {}
  var navbarLinks = []
  var subnav = document.querySelector('.rx-subnav')
  var subnavLinks = subnav.querySelector('.rx-subnav__links')

  pages.forEach(function (page, i) {
    var title = page.querySelector('h1').innerText
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
    console.log(page)
    page.style = 'display: none;'

    if (hash ? id === hash : i === 0) {
      el.classList.add('rx-navbar__link--active')
      page.style = 'display: block;'
      initSubnav(id)
    } else if (sectionToPages[hash]) {
      if (sectionToPages[hash].getAttribute('rx-page') === id) {
        el.classList.add('rx-navbar__link--active')
        page.style = 'display: block;'
        initSubnav(id, hash)
      }
    }
  })

  navbarLinks.forEach((link) => {
    link.onclick = function (e) {
      var id = e.target.href.split('#')[1]
      pages.forEach((page) => {
        page.style = page.getAttribute('rx-page') === id ? 'display: block;' : 'display: none;'
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
        subnav.style = 'display: none;'
        document.body.classList.remove('rx-body--has-subnav')
      } else {
        subnav.style = 'display: block;'
        document.body.classList.add('rx-body--has-subnav')
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

  fetch('https://rawgit.com/riskxchange/icons/master/dist/icons.json')
  .then((res) => res.json())
  .then((json) => {
    var data = Object.keys(json)
    var div = document.createElement('div')
    div.className = 'rx-card rx-utils--clearfix'
    data.forEach((icon) => (
      div.innerHTML += `
        <div class="rx-col--sm-3 rx-col--xs-6">
          <i class="rx-icon rx-icon--${icon}" style="font-size: 32px"></i>
          <code>${icon}</code>
        </div>
      `)
    )
    document.querySelector('[rx-page=icons]').appendChild(div)
    // init code examples
    document.querySelectorAll('[rx-section], [rx-page=icons]').forEach(function (el) {
      var clone = el.cloneNode()
      clone.innerHTML = el.innerHTML
      var h2 = clone.querySelector('h1, h2')
      h2.parentNode.removeChild(h2)
      var codeSample = document.createElement('pre')
      codeSample.innerText = html_beautify(clone.innerHTML)
      el.appendChild(codeSample)
    })
  })
}
