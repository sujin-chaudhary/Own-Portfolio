import React from 'react'
import img1 from '../../assets/animeowl.png'
import img2 from '../../assets/fashion.png'
import img3 from '../../assets/restro.png'



export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>



      <div className="container portfolio_container">
       
       {/*  Restaurant Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img3} alt="" />
            </div>
            <h3>Restaurant Website</h3>
            <a href="https://github.com/sujin-chaudhary/Own-Portfolio.git" className='btn btn-primary' target={_blank} rel="noopener noreferrer">Github</a>    
          </div>
        </article>

        {/* Fashion Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img2} alt="" />
            </div>
            <h3>Fashion Website</h3>
            <a href="https://github.com/sujin-chaudhary/Own-Portfolio.git" className='btn btn-primary' target={_blank} rel="noopener noreferrer">Github</a>    
          </div>
        </article>

        {/* Animeowl Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img1} alt="" />
            </div>
            <h3>AnimeOwl Website</h3>
            <a href="https://github.com/sujin-chaudhary/Own-Portfolio.git" className='btn btn-primary' target={_blank} rel="noopener noreferrer">Github</a>    
          </div>
        </article>


      </div>
    </section>
  )
}
