import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import {IoMenuSharp} from 'react-icons/io5'
import '../css/Navbar.css'
import Logo from '../images/BM-flavicon.png'

const Navbar = (props) => {
  const {user, logout, username} = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false)
  const signout = async () => {
    await logout()
    window.location.reload()
    setIsOpen(false)
  }
  return (
    <>
      <IoMenuSharp onClick={()=>{setIsOpen(!isOpen)}} className="shownav-btn"/>
      <div className={(isOpen ? "open nav-centered navbar" : "navbar")}>
            <div className={isOpen ? "nav-centered nav-items" : "nav-items"}>
                {user == true &&
                <>
                  <div className ="nav-header">
                    <div className="nav-logo">
                      <img className='logo-image' src={Logo} alt="" />
                      <p className='logo-text'>BudgetMate</p>
                  </div>
                  <h2 className='nav-greeting'>Hi, {username}</h2>
                  </div>
                  <div className="nav-links">
                    <Link to='/dashboard'><p onClick={()=>{setIsOpen(false)}} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Dashboard</p></Link>
                    <Link to='/budget'><p onClick={()=>{setIsOpen(false)}} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Budget</p></Link>
                    <Link to='/history'><p onClick={()=>{setIsOpen(false)}} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>History</p></Link>
                  </div>
                  <div className='nav-links'>
                    <Link to="/" onClick={signout}><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item nav-logout"}>Log out</p></Link>
                  </div>
                </>
                } 
                
            </div>
        </div>
    
    </>
  )
}

export default Navbar