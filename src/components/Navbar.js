import React from 'react'
import '../css/Navbar.css'
const Navbar = (props) => {
  return (
    <div className={props.menuOpen ? "open nav-centered navbar" : "navbar"}>
        <div className={props.menuOpen ? "nav-centered nav-items" : "nav-items"}>
            <p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Dashboard</p>
            <p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>Forecaster</p>
            <p className={props.menuOpen ? "no-nav-padding nav-item" : "nav-item"}>History</p>
        </div>
    </div>
  )
}

export default Navbar