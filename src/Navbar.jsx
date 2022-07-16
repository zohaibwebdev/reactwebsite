import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    let activeClassName = "underline";
    return (

    <>
        <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/about">About</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/services">Services</NavLink></li>
                <li><NavLink className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } to="/contact">Contact</NavLink></li>
            </ul>
            <h1 class="logo">ZOHAIB</h1>
        </div>
    </nav>
    </>
  )
}

export default Navbar