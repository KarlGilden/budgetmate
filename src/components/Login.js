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
        await fetch("https://budgetmate-api.herokuapp.com/auth/login", {
            method: "POST",
            credentials: 'include',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })
        }).then(response=>response.json())
        .then(data => {
            setError(data.message)
            if(data.message == 'success'){
                navigate('/dashboard')
            }
        }).catch(e=>{
            //console.log(JSON.stringify(e.message.sw))
        })
        
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