import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import Navbar from './Navbar'
const SecureRoute = () => {
  const { user, loadingAuth } = useContext(GlobalContext)

  return (
    <>
      <Navbar/>
      {user == true ? <Outlet/>  : <Navigate to="/"/>}
    </>
)}

export default SecureRoute