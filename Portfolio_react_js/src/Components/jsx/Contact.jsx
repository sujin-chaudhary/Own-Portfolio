import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'

export default function Contact() {
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icons'/>
            <h4>Email</h4>
            <h5>sujin098160719@gmail.com</h5>
            <a href="mailto:sujin098160719@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='contact-icons'/>
            <h4>messenger</h4>
            <h5>Sumeramikoto Dhami Tharu</h5>
            <a href="https://m.me/sujin.dhamitharu.1" target={'_blank'} rel="noreferrer">Connect With me</a>
          </article>
       
        
          <article className="contact-option">
            <AiOutlinePhone className='contact-icons'/>
            <h4>Contact</h4>
            <h5>+977-9898989898</h5>
            <a href="tel:989898989" target={'_blank'} rel="noreferrer">Call me</a>
          </article>
        </div>
       {/* End of contact option */}

       
      <form action="">
        <input type="text" name='name' placeholder="Your Full Name " required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea type="text" name='message' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Submit </button>
      </form>

      </div>
      
    </section>
  )
}
