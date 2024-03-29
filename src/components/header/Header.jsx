import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/profile.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ally Guo</h1>
        <h5 className='text-light'>from University of Waterloo</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="image of me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header