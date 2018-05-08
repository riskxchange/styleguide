import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import Container from './Container'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Icon from './Icon'

class Navbar extends PureComponent {
  renderLogo () {
    const homepage = this.props.homepage || '/'
    return (
      <a className='rx-navbar__logo' href={homepage}>
        <Logo inverse />
      </a>
    )
  }
  renderInner () {
    return (
      <div>
        {this.renderLogo()}
        {this.props.children}
      </div>
    )
  }
  renderContainer () {
    return <Container noPad>{this.renderInner()}</Container>
  }
  render () {
    return (
      <nav className='rx-navbar'>
        {this.props.fullWidth ? this.inner : this.container}
      </nav>
    )
  }
}

function NavbarTitle ({ children }) {
  return <div className='rx-navbar__title'>{children}</div>
}

function NavbarSeachbar () {
  return (
    <div className='rx-navbar__searchbar'>
      <button className='rx-navbar__searchbar-toggle'>
        <Icon variant='search' />
      </button>
      <Searchbar
        placeholder='Search for a company...'
        notFoundText='Company not in search results?'
      />
    </div>
  )
}

function NavbarLink ({ children, active, dropdown }) {
  const className = cx('rx-navbar__link', {
    'rx-navbar__link--active': active,
    'rx-navbar__link--dropdown': dropdown
  })
  return (
    <li className={className}>{children}</li>
  )
}

function NavbarDropdown ({ icon, text, children }) {
  return (
    <div className='rx-navbar-dropdown'>
      <button className='rx-navbar-dropdown__toggle'>
        <Icon variant={icon} /> {text}
      </button>
      <div className='rx-navbar-dropdown__links'>
        {children}
      </div>
    </div>
  )
}

function NavbarDropdownLink ({ imageUrl, title, ...props }) {
  return (
    <a className='rx-navbar-dropdown__link' {...props}>
      {imageUrl ? <img src={imageUrl} /> : null}
      <span>{title}</span>
    </a>
  )
}

function NavbarMenu ({ children }) {
  return (
    <div className='rx-navbar__menu-container'>
      <button className='rx-navbar__menu-toggle'>
        <Icon variant='menu-toggle' />
      </button>
      <div className='rx-navbar__menu'>
        <ul className='rx-navbar__links'>
          {children}
        </ul>
      </div>
    </div>
  )
}

/*
<Navbar fixed fullWidth homepage='/'>
  <Navbar.Title>
  <Navbar.Searchbar />
  <Navbar.Link>More info</Navbar.Link>
  <Navbar.Dropdown title={
    <span><Icon variant="app-menu" /> Apps</span>
  }>
    <Navbar.Link>Assessment Manager</Navbar.Link>
    <Navbar.Link>Assessment Manager</Navbar.Link>
  </Navbar.Dropdown>
  <Navbar.Dropdown title='My Account' active chevron>
    <Navbar.Link>Assessment Manager</Navbar.Link>
    <Navbar.Link>Assessment Manager</Navbar.Link>
    <Navbar.Divider>My companies</Navbar.Divider>
    <Navbar.Link>My companies</Navbar.Link>
  </Navbar.Dropdown>
</Navbar>
*/

/*
<Navbar fullWidth>
  <Navbar.Logo>
  <Navbar.Link>Example 1</Navbar.Link>
  <Navbar.Link>Example 2</Navbar.Link>
  <Navbar.Link>Example 3</Navbar.Link>
</Navbar>
*/

Navbar.Title = NavbarTitle
Navbar.Seachbar = NavbarSeachbar
Navbar.Menu = NavbarMenu
Navbar.Link = NavbarLink
Navbar.Dropdown = NavbarDropdown
Navbar.DropdownLink = NavbarDropdownLink

export default Navbar
