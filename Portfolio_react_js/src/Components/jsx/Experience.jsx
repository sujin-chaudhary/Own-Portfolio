import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_FrontEnd">
          <h3>FrontEnd Experience</h3>
          <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>

            </div>
          </article>

          <article className='experience_details'>
      
            <BsPatchCheckFill className="icons"/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>

            </div>
          </article>
          
          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>

            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>

            </div>
          </article>
      

          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <div>
            <h4>TailWind CSS</h4>
            <small className='text-light'>Intermediate</small>

            </div>
          </article>
    
          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <div>

            <h4>ReactJS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          </div>
        </div>
        <div className="experience_BackEnd">
          <h3>BackEnd Experience</h3>
          <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className="icons"/>
            <h4>Coming Soon</h4>
          </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience