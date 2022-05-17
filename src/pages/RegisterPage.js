import React, {useContext} from 'react'
import Register from '../components/Register'
import { GlobalContext } from '../context/BalanceContext'

const RegisterPage = () => {
  const {user, loadingAuth} = useContext(GlobalContext)

  return (
    <div className='login-page'>
    {!loadingAuth ? <Register/> : <p>Loading...</p> }
    
    </div>
  )
}

export default RegisterPage