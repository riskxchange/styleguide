import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Container from './Container'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Icon from './Icon'
import BaseLink from './BaseLink'

const DEFAULT_PROPS = {
  fixed: false,
  fullWidth: false,
  homepage: '/',
  searchbar: false,
  title: null,
  titleLink: null,
  searchbarConfig: {
    onChange: (query) => console.warn(`Searchbar query: ${query}`),
    results: [],
    notFoundText: '',
    onResultClick: {},
    onNotFoundClick: {}
  }
}

class Navbar extends PureComponent {
  state = {
    visible: null
  }
  static defaultProps = DEFAULT_PROPS;
  renderLogo () {
    return (
      <BaseLink className='rx-navbar__logo' href={this.props.homepage}>
        <Logo inverse />
      </BaseLink>
    )
  }
  get searchbarMobileVisible () {
    return this.state.visible === 'searchbar'
  }
  get menuMobileVisible () {
    return this.state.visible === 'menu'
  }
  onBackgroundClicked = (e) => {
    if (e.target.classList.contains('rx-navbar')) {
      this.setState({ visible: null })
    }
  }
  toggleSearchbarMobileVisible = () => {
    this.setState(({ visible }) => {
      return { visible: visible === 'searchbar' ? null : 'searchbar' }
    })
  }
  toggleMenuMobileVisible = () => {
    this.setState(({ visible }) => {
      return { visible: visible === 'menu' ? null : 'menu' }
    })
  }
  renderTitle () {
    if (!this.props.title) return null
    return (
      <div className='rx-navbar__title'>
        {this.props.titleLink ? <BaseLink href={this.props.titleLink} children={this.props.title} /> : this.props.title}
      </div>
    )
  }
  renderSearchbar () {
    if (!this.props.searchbar) return null
    if (this.props.title) {
      console.warn('Cannot have title and searchbar - there\'s not enough space!')
      return null
    }
    return (
      <div className='rx-navbar__searchbar'>
        <button className='rx-navbar__searchbar-toggle' onClick={this.toggleSearchbarMobileVisible}>
          <Icon variant='search' />
        </button>
        <Searchbar
          placeholder='Search for a company...'
          notFoundText='Company not in search results?'
          {...this.props.searchbarConfig}
        />
      </div>
    )
  }
  renderMenu () {
    return (
      <div className='rx-navbar__menu'>
        <button className='rx-navbar__menu-toggle' onClick={this.toggleMenuMobileVisible}>
          <span className='rx-icon rx-icon--menu-toggle' />
        </button>
        <div className='rx-navbar__links'>
          {this.props.children}
        </div>
      </div>
    )
  }
  renderInner () {
    return (
      <div className='rx-navbar__inner'>
        {this.renderLogo()}
        {this.renderTitle()}
        {this.renderSearchbar()}
        {this.renderMenu()}
      </div>
    )
  }
  renderContainer () {
    return <Container>{this.renderInner()}</Container>
  }
  render () {
    const className = cx('rx-navbar', {
      'rx-navbar--fixed': this.props.fixed,
      [`rx-navbar--${this.state.visible}-visible`]: this.state.visible
    })
    return (
      <nav className={className} onClick={this.onBackgroundClicked}>
        {this.props.fullWidth ? this.renderInner() : this.renderContainer()}
      </nav>
    )
  }
}

function NavbarLink ({ children, imageUrl, active, ...rest }) {
  const className = cx('rx-navbar__link', {
    'rx-navbar__link--active': active
  })
  if (imageUrl) {
    return (
      <BaseLink className={className} {...rest}>
        <img src={imageUrl} />
        <span>{children}</span>
      </BaseLink>
    )
  }
  return (
    <BaseLink className={className} {...rest}>{children}</BaseLink>
  )
}

function NavbarDropdown ({ noChevron, icon, title, children }) {
  const customIcon = icon ? <Icon variant={icon} /> : null
  const chevron = noChevron ? null : <Icon variant='chevron-down' />
  return (
    <div className='rx-navbar__link rx-navbar__link--dropdown'>
      <div className='rx-navbar__dropdown'>
        <button className='rx-navbar__dropdown-toggle'>
          {customIcon} {title} {chevron}
        </button>
        <div className='rx-navbar__links'>
          {children}
        </div>
      </div>
    </div>
  )
}

function NavbarLinkGroup ({ title, children }) {
  return (
    <div className='rx-navbar__link-group'>
      <div className='rx-navbar__link-group-title'>{title}</div>
      {children}
    </div>
  )
}

Navbar.Link = NavbarLink
Navbar.LinkGroup = NavbarLinkGroup
Navbar.Dropdown = NavbarDropdown

export default Navbar
