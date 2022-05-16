import React, { useContext } from 'react'
import Login from '../components/Login'
import { GlobalContext } from '../context/BalanceContext'
import '../css/Home.css'
const Home = () => {
  const {user, loadingAuth} = useContext(GlobalContext)
  return (
    <div className='page'>
      <Login/>
    </div>
  )
}

export default Home