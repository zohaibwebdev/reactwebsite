import React from 'react'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='home container'>
        <div className="left-side">
            <h3 className='heading'>welcome to our website</h3>
            <h3 className='heading'>Grow your bussiness with <strong>Zohaib Ul Hassan</strong></h3>
            <p className='lead'>we are the team of the talented web developers</p>
            <NavLink className="btn" to="/services">Hire Us</NavLink>
        </div>
        <div className="right-side">
            <img src={logo} alt="logo" />
        </div>
    </div>
    <div className="footer">
      <h6>Develope by <span> Muhammad Zohaib Ul Hassan</span> with love </h6>
    </div>
    </>
  )
}

export default Home