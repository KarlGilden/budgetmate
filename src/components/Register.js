import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/BalanceContext';
import '../css/Login.css'
import CTAButton from './CTAButton';
const Register = () => {
    const {register, isRegistered, error, loadingAuth} = useContext(GlobalContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emptyFieldError, setEmptyFieldError] = useState("");

    const handleSubmit = async () => {   
        setNameError("") 
        setEmailError("")
        setPasswordError("")
        setEmptyFieldError("")

        var count = 0
        if(name.length < 1){
            setEmptyFieldError("Please enter all fields")
            setNameError("Name is required")
        }else{
            count++
        }
        if(email.length < 1){
            setEmptyFieldError("Please enter all fields")
            setEmailError("Email is required")
        }else if(!email.includes('@')){
            setEmailError("Email must be a valid email address")
        } else{
            count++
        }
        if(password.length < 1){
            setEmptyFieldError("Please enter all fields")
            setPasswordError("Password is required")
        }else{
            count++
        }

        if(count == 3){
            register(name, email, password)
        }    
    }
    
  return (
    <div className='login-form'>
        <label htmlFor="">Name:</label>
        <small className='small-error'>{nameError}</small> 
        <input 
        type="text"
        className={`${nameError && "input-error"} login-input`} 
        onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <label htmlFor="">Email:</label>
        <small className='small-error'>{emailError}</small>
        <input 
        type="email" 
        className={`${emailError && "input-error"} login-input`}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <label htmlFor="">Password:</label>
        <small className='small-error'>{passwordError}</small>
        <input 
        type="password" 
        className={`${passwordError && "input-error"} login-input`}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <CTAButton fullWidth={true} margin={false} disabled={loadingAuth ? true : false} func={handleSubmit} text={loadingAuth ? "Loading..." : "Register"} color="primary"/>
        {error}
        {isRegistered ? <><p>Success! <Link to="/login">Login here</Link></p></> : <></>}
    </div>
  )
}

export default Register