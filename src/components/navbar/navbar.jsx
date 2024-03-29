import React, {useState} from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/image/LOMILES.png'
import './navbar.css';

const Menu =() => (
  <>
  <p><a href="/home">Home</a></p>
  <p><a href="/tentangkami">Tentang Kami</a></p>
  <p><a href="/layanan">Layanan</a></p>
  <p><a href="/artikel">Artikel</a></p>
  <p><a href="/kontak">Kontak</a></p>
  <p><a href="/hitungbiaya">Hitung Biaya</a></p>
  <p><a href="/login">Login</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign' hidden>
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color="#FFF" size={27} onClick={() =>setToggleMenu(false)}/>
        :<RiMenu3Line color="#FFF" size={27} onClick={() =>setToggleMenu(true)}/>
      }
      {
        toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
            <Menu/>
            <div className='gpt3__navbar-menu_container-links-sign' hidden>
              <p>Sign In</p>
              <button type='button'>Sign up</button>
            </div>
            </div>
          </div>  
        )
      }
      </div>
    </div>
  )
}

export default Navbar