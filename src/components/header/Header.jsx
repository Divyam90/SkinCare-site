import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="container">
        <div className="logo">
            <img src={logo} alt="" />
            <span>amazon</span>

        </div>
        <div className="right">
            <div className="menu">
                <ul className="menu">
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <input type="text" placeholder="Search Here" className="search" />
            <CiShoppingCart  className="cart"/>
        </div>
    </div>
  )
}

export default Header