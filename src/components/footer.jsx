import React from 'react'
import { FaInstagram, FaTwitter  } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <p>copyright @2022</p>
      <div className="social">
      <i className='FaTwitter'><FaTwitter /></i>
      <i className='FaInstagram'><FaInstagram /></i>
      </div>
    </div>
  )
}

export default Footer