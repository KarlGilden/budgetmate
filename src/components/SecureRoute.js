import React, {useState, useEffect, useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
const SecureRoute = () => {
  const { user, loadingAuth } = useContext(GlobalContext)

  return (!loadingAuth ? 
    user == false ? <Navigate to="/"/> : <Outlet/>
:
<>
<Navigate to="/"/>
</>
)}

export default SecureRoute