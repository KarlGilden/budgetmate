import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import '../css/Navbar.css'
import Logo from '../images/BM-flavicon.png'

const Navbar = (props) => {
  const [redirect, setRedirect] = useState(false)
  const closeMenu = () =>{
    props.setMenuOpen(false)
  }
  const navigate = useNavigate()

  const {user, logout} = useContext(GlobalContext)

  const signout = async () => {
    await logout()
    window.location.reload()
    closeMenu()
  }
  return (
    <>
    {window.location.pathname == "/" || window.location.pathname == "/login" || window.location.pathname == "/register"? 

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
  :
  <div className={(props.menuOpen ? "open nav-centered navbar" : "navbar")}>
        <div className={props.menuOpen ? "nav-centered nav-items" : "nav-items"}>
            {user == true &&
            <>
              <div className ="nav-header">
                <div className="nav-logo">
                  <img className='logo-image' src={Logo} alt="" />
                  <p className='logo-text'>BudgetMate</p>
              </div>
              <h2>Hi, DemoUser</h2>
              </div>
              <div className="nav-links">
                <Link to='/dashboard'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Dashboard</p></Link>
                <Link to='/forcast'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Forecaster</p></Link>
                <Link to='/history'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>History</p></Link>
              </div>
              <div className='nav-links'>
                <Link to="/" onClick={signout}><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item nav-logout"}>Log out</p></Link>
              </div>
            </>
            } 
            
        </div>
    </div>
  
    }
    
    </>
  )
}

export default Navbar