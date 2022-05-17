import React, {useContext} from 'react'
import Login from '../components/Login'
import { GlobalContext } from '../context/BalanceContext'
import '../css/LoginPage.css'
const LoginPage = () => {
    const {user, loadingAuth} = useContext(GlobalContext)
    return (
      <div className='login-page'>
        {!loadingAuth ? <Login/> : <p>Loading...</p> }
        
      </div>
    )
}

export default LoginPage