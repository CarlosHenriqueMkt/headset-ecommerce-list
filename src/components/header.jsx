import React from 'react'
import { FaInstagram, FaShoppingCart  } from 'react-icons/fa';

function Header() {
  return (
    <nav>
    <div className="logo">
       <a href="https://www.fallenstore.com.br/">
          <img 
          src="./assets/logo-fallen-horizontal.png" 
          alt="Logotipo Fallen Store" />
        </a>
    </div>
    <ul>
      <li>Home</li>
      <li>Our Products</li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>
    <div className="search">
      <i className='FaInstagram'><FaInstagram /></i>
      <i className='FiShoppingCart'><FaShoppingCart /></i>
    </div>
    </nav>
  )
}

export default Header