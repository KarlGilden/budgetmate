import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/BalanceContext';
import '../css/Login.css'
const Register = () => {
    const {register, isRegistered, error} = useContext(GlobalContext)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {    
        register(name, email, password)
    }
    
  return (
    <div className='login-form'>
        <label htmlFor="">Name:</label>
        <input 
        type="text" 
        onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <label htmlFor="">Email:</label>
        <input 
        type="email" 
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <label htmlFor="">Password:</label>
        <input 
        type="password" 
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={handleSubmit}>Register</button>
        {error}
        {isRegistered ? <><p>Success! <Link to="/login">Login here</Link></p></> : <></>}
    </div>
  )
}

export default Register