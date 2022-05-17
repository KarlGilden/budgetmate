import React, { useContext } from 'react'
import CTAButton from '../components/CTAButton'
import Login from '../components/Login'
import { GlobalContext } from '../context/BalanceContext'
import '../css/Home.css'
import backgroundSVG from "../images/blobs.svg"
const Home = () => {
  const {user, loadingAuth} = useContext(GlobalContext)
  return (
    <div className='home-page'>
      <img className='background' src={backgroundSVG} alt="" />
      <div className="hero-container">
        <div className="hero-text">
         <h1 className='hero-slogan'>Take your finances into <br /><span className='highlight-text'>your hands</span></h1>
         <p className='hero-desc'>Keep track of your expenses and manage your money with our state of the art budgeting tool.</p>
        </div>
        <div className="CTAButtons">
          <CTAButton text="Try the demo" color="primary"/>
          <CTAButton text="Sign up" color="secondary"/>
        </div>
      </div>
    </div>
  )
}

export default Home