import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ally-guo-666390244/">
          <BsLinkedin/>
        </a>
        <a href="https://github.com/ally-223">
          <FaGithub/>
        </a>
    </div>
  )
}

export default HeaderSocials