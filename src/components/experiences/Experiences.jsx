import React from 'react'
import './Experiences.css'
import {FaAward} from 'react-icons/fa'

const Experiences = () => {
  return (
    <section id='experiences'>
      <h5>The Skills I Have</h5>
      <h2>My Experiences</h2>
      
      <div className="container experience_container">
        {/** beginning of social experiences */}
        <div className="experience_social">
        <h3>Organization Involvements</h3>
        <div className="experience_content">
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        </div>
        </div>

        {/** beginning of work experiences */}
        <div className="experience_work">
        <h3>Work Experiences</h3>
        <div className="experience_content">
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        <article className="experience_details">
          <h4>abaabaaba</h4>
          <small className='text-light'>abaaba</small>
        </article>
        </div>
        </div>


      </div>
    </section>
  )
}

export default Experiences