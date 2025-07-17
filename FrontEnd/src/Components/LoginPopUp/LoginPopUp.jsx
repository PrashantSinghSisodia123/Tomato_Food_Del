import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"



const LoginPopUp = ({setShowPopUp}) => {
const [currentState,setCurrentState]=useState("Sign Up")
const {url,setToken}=useContext(StoreContext)
 const[data,setData]=useState({
    name:"",
    email:"",
    password:""
 })
const  onChangeHandler = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
}

const onLogin=async(event)=>{
    event.preventDefault()
    let newUrl=url;
    if(currentState==="Login"){
        newUrl +="/api/user/login"
    }
    else{
        newUrl +="/api/user/register"
    }
    
    const response = await axios.post(newUrl,data)

    if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setShowPopUp(false)
    }
    else{
        alert(response.data.message)
    }
    
}

   
  return (
    <div className='login-popup'>
        <form  onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                {currentState==="Sign Up"?<h2>Sign Up</h2>:<h2>Login</h2>}
                <img onClick={()=>setShowPopUp(false)} src={assets.cross_icon} alt="" />
            </div>  
            <div className="login-popup-input">
                {currentState==="Sign Up"?<input name='name' onChange={ onChangeHandler} value={data.name} type="text"placeholder='Username' required /> :<></>}
                <input name='email'  value={data.email}  onChange={ onChangeHandler} type="text" placeholder='email' required/>
                <input name='password' value={data.password}  onChange={ onChangeHandler} type='password' placeholder='password'required />
            </div>
            {currentState==="Sign Up"? <button type='submit' className="login-popup-btn">Create Account</button>: <button className="login-popup-btn">Login</button>}
           
        <div className="login-popup-terms">
            <input type='checkbox' />
            <p> By continueing ,I agree with the terms of use & privacy policy</p>
        </div>
       {currentState==="Sign Up"? <p className="login-popup-switch">Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
       :<p className="login-popup-switch">Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Login here</span></p>}

        </form>
    </div>
  )
}

export default LoginPopUp