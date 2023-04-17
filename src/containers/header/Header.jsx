import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <center>
        <h2 className='gradient__text' style={{marginTop:'200px'}}>Logistic channel China - Indonesia
        </h2>
        </center>
        <a className='gpt3__header_hubungi_kami' href="/kontak"><p>Hubungi Kami</p></a>
       
      
      </div>
     
    </div>
  )
}

export default Header