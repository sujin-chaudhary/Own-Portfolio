import React from 'react'
import img1 from '../../assets/animeowl.png'
import img2 from '../../assets/fashion.png'
import img3 from '../../assets/restro.png'


/* const data=[
  { "id": 5,
   "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", 
     "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", 
     "rating": { "rate": 4.6, "count": 400 } },
  { "id": 6,
   "title": "Solid Gold Petite Micropave ",
    "price": 168,
     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
     "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", 
     "rating": { "rate": 3.9, "count": 70 } },
  { "id": 7,
   "title": "White Gold Plated Princess"
   , "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", 
    "category": "jewelery", "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", 
    "rating":{ "rate": 3, "count": 400 } },
  { "id": 8,
   "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99, 
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
     "category": "jewelery", "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "rating": { "rate": 1.9, "count": 100 } }
]
 */


export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>



      <div className="container portfolio_container">
       {/*  {
          data.map(({id,title,price}) =>{
            return(
              <article key={id} className="test">
                <div className="image-item">
                  <div className="price">{price}</div>
                  <h3>{title}</h3>
                </div>
              </article>
            )
          })
        } */}
       {/*  Restaurant Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img3} alt="" />
            </div>
            <h3>Restaurant Website</h3>
            <a href="https://github.com" className='btn btn-primary'>Github</a>    
          </div>
        </article>

        {/* Fashion Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img2} alt="" />
            </div>
            <h3>Fashion Website</h3>
            <a href="https://github.com" className='btn btn-primary'>Github</a>    
          </div>
        </article>

        {/* Animeowl Portfolio */}
        <article className='portfolio_content'>
          <div className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={img1} alt="" />
            </div>
            <h3>AnimeOwl Website</h3>
            <a href="https://github.com" className='btn btn-primary'>Github</a>    
          </div>
        </article>


      </div>
    </section>
  )
}
