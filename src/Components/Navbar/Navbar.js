import React from 'react'
import './Navbar.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
          <Menu.Item name='todo'>Todo</Menu.Item>
        </Menu>
    </div>
    // <div className="Navbar">
    //   <img className='header-logo' src={headerLogo} alt="Somewhere's logo."/>
    // </div>
  )
}

export default Navbar;
