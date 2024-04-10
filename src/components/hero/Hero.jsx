import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { RiShoppingBag2Fill } from "react-icons/ri";
import hero from '../../assets/hero.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="container">
        <div className="h-side">
            <span className="text1">Skin Protection Cream</span>
            
                <span className="text2">Trendy collection</span>
                <span className="text3">We have the best skincare products available in the market. Check Out below for more details!. Use The discount coupon code given in the below description</span>
           
        </div>
        <div className="wrapper">
            <div className="blue"></div>
            <img src={hero} alt="" />
            <div className="cart2">
            <RiShoppingBag2Fill />
            <div className="signup">
                <span>Best SignUp Offers</span>
                <div className="rightarrow">
                <FaArrowRight />
                </div>
            </div>
            </div>
        </div>

        <div className="h-side">
            <div className="traffic">
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className="customers">
                <span>100K</span>
                <span>Happy Customers</span>
            </div>
        </div>

    </div>
  )
}

export default Hero