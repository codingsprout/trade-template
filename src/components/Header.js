import React from 'react';
import Logo from '../images/logo.png';
import '../compcss/header.css';

export default function Header() {
  return (
    <div className='header__wrapper'>
      {/* logo */}
      <div className='header__logo'>
        <img src={Logo} width={50} height={50} alt='' />
      </div>

      {/* search area */}
      <div className='header__search'>
        <div className='header__searchContainer'>
          <input placeholder='Search' type='text' />
        </div>
      </div>

      {/* menu items */}
      <div className='header__menuItems'>
        <a href='#'>Free Stocks</a>
        <a href='#'>Portfolio</a>
        <a href='#'>Cash</a>
        <a href='#'>Messages</a>
        <a href='#'>Account</a>
      </div>
    </div>
  );
}
