import React, {useState, useEffect, useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
const LoginRedirect = () => {
    const { user, loadingAuth } = useContext(GlobalContext)
  return (
        user == true ? <Navigate to="/dashboard"/> : <Outlet/>

  )
}

export default LoginRedirect