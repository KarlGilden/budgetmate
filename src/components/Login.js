import React, { useContext, useState } from 'react'
import TextInput from './TextInput'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/BalanceContext'
import CTAButton from './CTAButton'
import '../css/CTAButton.css'
const Login = () => {
    const {login, error, loadingAuth} = useContext(GlobalContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emptyFieldError, setEmptyFieldError] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async () => {    
        setEmailError("")
        setPasswordError("")
        setEmptyFieldError("")

        var count = 0
        if(email.length < 1){
            setEmptyFieldError("Please enter all fields")
            setEmailError("Email is required")
        }else{
            count++
        }
        if(password.length < 1){
            setEmptyFieldError("Please enter all fields")
            setPasswordError("Password is required")
        }else{
            count++
        }

        if(count == 2){
            login(email, password)
        }
    }
    
  return (
    <div className='login-form'>
        <h1 className='login-header'>Login</h1>
        <label htmlFor="">Email:</label>
        <small className='small-error'>{emailError}</small>
        <input 
        className={`${emailError && "input-error"} login-input`}
        type="email" 
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <label htmlFor="">Password:</label>
        <small className='small-error'>{passwordError}</small>
        <input 
        className={`${passwordError && "input-error"} login-input`}
        type="password" 
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <CTAButton fullWidth={true} margin={false} disabled={loadingAuth ? true : false} func={handleSubmit} text={loadingAuth ? "Loading..." : "Login"} color="primary"/>
        {error}
    </div>
  )
}

export default Login