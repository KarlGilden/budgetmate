import React, { useContext, useState } from 'react'
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

  <div className="home-nav">
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
            {user == true ?
            <>
              <Link to='/dashboard'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Dashboard</p></Link>
              <Link to='/forcast'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Forecaster</p></Link>
              <Link to='/history'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>History</p></Link>
              <Link to="/" onClick={signout}><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Log out</p></Link>
            </>

            :

            <>
              <Link to='/login'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Login</p></Link>
              <Link to='/register'><p onClick={closeMenu} className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Register</p></Link>
            </>
            } 
            
        </div>
    </div>
  
    }
    
    </>
  )
}

export default Navbar