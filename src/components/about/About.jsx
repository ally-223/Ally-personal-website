import React from 'react'
import './About.css'
import ME from '../../assets/about_pic.jpeg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Getting to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt="pic of me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            
            <div className="about_card">
              <article>
                <FaAward className='about_icon'/>
                <h5>Experiences</h5>
                <small>abaabaaba</small>
                </article>
                </div>

                <div className="about_card">
              <article>
                <FaAward className='about_icon'/>
                <h5>Experiences</h5>
                <small>abaabaaba</small>
                </article>
                </div>

                <div className="about_card">
              <article>
                <FaAward className='about_icon'/>
                <h5>Experiences</h5>
                <small>abaabaaba</small>
                </article>
                </div>

         
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam. Voluptatem sit doloribus et animi officia aperiam in at veniam, illo laudantium sunt veritatis perferendis, numquam distinctio cupiditate officiis enim!
          </p>

          <a href="#contact" className='btn btn-primary'>Connect with me!</a>
        </div>
      </div>

    </section>
  )
}

export default About