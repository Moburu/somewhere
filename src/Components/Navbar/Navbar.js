import React from 'react'
import './Navbar.css';
import { Menu } from 'semantic-ui-react';

const Navbar = props => {
  return (
    <div className='Navbar'>
        <Menu className='menu'
          inverted
          borderless
          attached
          color='purple'
          size='large'
        >
            <Menu.Item header >Somewhere</Menu.Item>
            <Menu.Item
                name='todo'
            />
            <Menu.Item
                name='schedule'
            />
            <Menu.Item
                name='calendar'
            />
        </Menu>
    </div>
  )
}

export default Navbar;
