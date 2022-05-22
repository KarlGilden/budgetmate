import React, {useState, useEffect, useContext} from 'react'
import { IoMenuSharp } from 'react-icons/io5';
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import HomeNav from './HomeNav';
import Navbar from './Navbar';
const LoginRedirect = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, loadingAuth } = useContext(GlobalContext)
  return (
    <>
      <HomeNav setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      {user == true ? <Navigate to="/dashboard"/> : <Outlet/>}
    </>


  )
}

export default LoginRedirect