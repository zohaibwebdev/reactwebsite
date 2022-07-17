import React, { useState } from 'react'
import { NavLink as A } from 'react-router-dom'

const Navbar = () => {

  const [activeClass, setActiveClass] = useState(false);

    return (
    <nav className={`navbar ${activeClass ? 'active' : ''}`}>
      <A to='/' className="navbar_brand">ZOHAIB</A>
      <div className="navbar_links">
        <button
          className="navbar_close"
          onClick={() => { setActiveClass(!activeClass)}}
        >
            &times;
        </button>
        <A to="/" className="navbar_link">Home</A>
        <A to="/services" className="navbar_link">Services</A>
        <A to="/about" className="navbar_link">About</A>
        <A to="/contact" className="navbar_link">Contact</A>
      </div>
      <button
          className='navbar_open'
          onClick={() => { setActiveClass(!activeClass)}}
      >
        ≡
      </button>
    </nav>
  )
}

export default Navbar