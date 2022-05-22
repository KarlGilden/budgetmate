import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/BM-flavicon.png'

const HomeNav = () => {
  return (
    <div className={"home-nav"}>
        <Link to="/" >
            <div className="logo">
                <img className='logo-image' src={Logo} alt="" />
                <p className='logo-text'>BudgetMate</p>
            </div>
        </Link>
        <Link className='home-nav-item' to='/login'><p>Login</p></Link>
        <Link className='home-nav-item' to='/register'><p>Register</p></Link>
  </div>
  )
}

export default HomeNav