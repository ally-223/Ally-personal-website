import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {ImClipboard} from 'react-icons/im'
import {BsChatText} from 'react-icons/bs'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experiences"><BiBook/></a>
      <a href="#portfolio"><ImClipboard/></a>
      <a href="#contact"><BsChatText/></a>
    </nav>
  )
}

export default Nav