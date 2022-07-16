import React from 'react'
import logo from './web.jpeg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home container'>
        <div className="right-side">
            <h3 className='heading'>welcome to our website</h3>
            <h3 className='heading'>Grow your bussiness with <strong>Zohaib Ul Hassan</strong></h3>
            <p className='lead'>we are the team of the talented web developers</p>
            <NavLink className="btn" to="/services">Hire Us</NavLink>
        </div>
        <div className="left-side">
            <img src="./web.jpeg" alt="logo" />
        </div>
    </div>
  )
}

export default Home