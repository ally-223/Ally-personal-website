// jsx SX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's commonly used in React applications to define the structure and layout of the user interface.
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experences from './components/experiences/Experiences'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experences/>
      <Portfolio/>
      <Contact/>
      <Footer/> 

    </>
  )
}

export default app