import React from 'react'
import gpt3Logo from '../../assets/logo.svg';
import logo from '../../assets/image/logo.png'

import './footer.css'
const Footer = () => {
  return (
    <div className='footer_screen'>
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'></h1>
      </div>
     
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>Jakarta,Indonesia, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Paritosh,BITS Goa</p>
          <p>9027641712</p>
          <p>varshneyparitosh7@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 Ocistik. All rights reserved.</p>
      </div>
    </div>

    </div>
  )
}
export default Footer