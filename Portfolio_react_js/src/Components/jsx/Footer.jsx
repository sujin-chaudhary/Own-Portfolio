import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'


export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo' >
        Logo
      </a>

      <ul className='permalinks'>
        <li><a href="#">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">contact</a></li>
        
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://Linkedin.com"><AiFillLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}
