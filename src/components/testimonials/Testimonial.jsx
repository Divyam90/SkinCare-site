import React from 'react'
import './testimonial.css'
import Hero from '../../assets/testimonialHero.png'

const Testimonial = () => {
  return (
    <div className="testimonial">
        <div className="wrapper">
            <div className="container">
            {/* <span>Top Rated</span> */}
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum?</span>
            </div>
        <img src={Hero} alt="" />
        <div className="container">
            <h3>100K</h3><span>Happy Customers With Us</span>
        </div>
        </div>

    </div>

  )
}

export default Testimonial