import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import '../css/Navbar.css'
const Navbar = (props) => {
  const closeMenu = () =>{
    props.setMenuOpen(false)
  }
  const {user, logout} = useContext(GlobalContext)

  const signout = () => {
    logout()
    closeMenu()
  }
  return (
    <div className={props.menuOpen ? "open nav-centered navbar" : "navbar"}>
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
  )
}

export default Navbar