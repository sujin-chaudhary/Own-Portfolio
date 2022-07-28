import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiFillFolder} from 'react-icons/ai'


export default function About() {
  return (
    
    <section id='about'>
      <h5>get to know</h5>
      <h2> About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about-icon'/>
            <h5>Experience</h5>
            <small>2.5 months training</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about-icon'/>
            <h5>Clients</h5>
            <small>Searching</small>
          </article>

          <article className='about_card'>
            <AiFillFolder className='about-icon'/>
            <h5>Projects</h5>
            <small>2+ completed</small>
          </article>
        </div>
        <p>Hi! I am Sujin Chaudhary. And this is my journey to FullStack Developer starting from FrontEnd to BackEnd And Database. Stay Tuned for more.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>


    </section>
  )
}
