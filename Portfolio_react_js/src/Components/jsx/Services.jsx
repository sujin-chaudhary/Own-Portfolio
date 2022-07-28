import React from 'react'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
      {/* ui/ux card S*/}
        <article className="services">
          <div className="services_head">
            <h3>UI/UX Design</h3>
          </div>  
          <div className="service_list">
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Wireframeing from Figma</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Wireframeing from Photoshop</p>
            </li>
          </div>
        </article>  
      {/* ui/ux card E*/}
      {/* WebDevelopment  S*/}
      <article className="services">
          <div className="services_head">
            <h3>WebDevelopment</h3>
          </div>  
          <div className="service_list">
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Interactive Designs</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Animations</p>
            </li>
          </div>
        </article>
      {/* WebDevelopment E*/}
      </div> 


    </section>
  )
}
