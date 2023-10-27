import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ALLYGUO</a>
      <div className="footer socials"> 
      {/*<a href="https://facebook.com"></a> 
      <a href="https://instagram.com/allyguo.2233"></a> 
      <a href="https://twitter.com"></a> */}
      </div>

      <div className="footer _copyright"> 
        <small>&copy; Ally's Personal Website All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer