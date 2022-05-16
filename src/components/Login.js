import React, { useContext, useState } from 'react'
import TextInput from './TextInput'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
const Login = () => {
    const {login} = useContext(GlobalContext)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate()

    const handleSubmit = async () => {    
        login(email, password)
    }
    
  return (
    <div className='login-form'>
        <label htmlFor="">Email:</label>
        <input 
        type="text" 
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <label htmlFor="">Password:</label>
        <input 
        type="text" 
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={handleSubmit}>Log in</button>
        {error}
    </div>
  )
}

export default Login