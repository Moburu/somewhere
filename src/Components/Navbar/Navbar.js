import React from 'react'
import './Navbar.css';
import { Menu } from 'semantic-ui-react';
import headerLogo from './Somewhere.png';

const Navbar = props => {
  return (
    <div className='Navbar'>
        <Menu
          className='menu'
          inverted
          borderless
          attached
          color='purple'
          size='large'
        >
          <Menu.Item header>Somewhere</Menu.Item>
          <Menu.Item name='todo'/>
          <Menu.Item name='notes'/>
        </Menu>
    </div>
    // <div className="Navbar">
    //   <img className='header-logo' src={headerLogo} alt="Somewhere's logo."/>
    // </div>
  )
}

export default Navbar;
