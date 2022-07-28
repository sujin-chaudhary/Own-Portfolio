import React from 'react';
import cv from '../../assets/cv.pdf';
import me from '../../assets/me.png';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const Header = () => {
  return (
    <header>

    <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sujin Chaudhary</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <div className="CTA">
          <a href={cv} className="btn" target={'_blank'}>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className="header_social">
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="http://github.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        </div>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>scroll down</a>
      </div>

    </header>
  )
}

export default Header