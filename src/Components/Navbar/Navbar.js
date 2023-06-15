import React from 'react'
import './Navbar.css';
import { Menu } from 'semantic-ui-react';

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
          <div className='firebaseui-auth-container'></div>
        </Menu>
    </div>
    // <div className="Navbar">
    //   <img className='header-logo' src={headerLogo} alt="Somewhere's logo."/>
    // </div>
  )
}

export default Navbar;
