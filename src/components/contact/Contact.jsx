import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoDiscordAlt} from 'react-icons/bi'

import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4if96po', 'template_17g9zaq', form.current, 'GjLtq__vZHqrvD4qz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
       <div className="contact_options">

          <article className="contact_option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>allyguo223@gmail.com</h5>
            <a href="mailto:allyguo223@gmail.com" target="_blank" className="link_to">Message Me!</a>
          </article>

          {/*<article className="contact_option">
            <AiOutlineInstagram/>
            <h4>Instagram</h4>
            <h5>@allyguo.2233</h5>
            <a href="https://www.instagram.com/ally.2233" target="_blank">Send me a Message!</a>
          </article>*/}

          <article className="contact_option">
            <BiLogoDiscordAlt/>
            <h4>Discord</h4>
            <h5 >@Alllllly</h5>
            <a href="https://discord.com" target="_blank" className="link_to">Message Me!</a>
          </article>

        </div>


        {/**--------end of contact options-----------*/}
        <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" name= 'name' placeholder= 'Your Full Name' required />
        <input type= "email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder= 'Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

