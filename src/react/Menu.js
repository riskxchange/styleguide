import React, {PureComponent} from 'react'
import MenuItem from './MenuItem'

class Menu extends PureComponent {
  renderItems () {
    const items = this.props.items || this.props.links
    if (!items) return this.props.children
    return items.map((link, i) => <MenuItem {...link} key={i} />)
  }
  render () {
    return (
      <nav className='rx-menu'>
        <div className='rx-menu__items'>
          {this.renderItems()}
        </div>
      </nav>
    )
  }
}

Menu.Item = MenuItem
Menu.Link = MenuItem

export default Menu
