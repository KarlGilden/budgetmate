import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = (props) => {
  return (
    <div className={props.menuOpen ? "open nav-centered navbar" : "navbar"}>
        <div className={props.menuOpen ? "nav-centered nav-items" : "nav-items"}>
            <Link to='/'><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Dashboard</p></Link>
            <Link to='/forcast'><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Forecaster</p></Link>
            <Link to='/history'><p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>History</p></Link>
        </div>
    </div>
  )
}

export default Navbar