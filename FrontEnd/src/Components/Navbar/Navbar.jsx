import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import { Profiler } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'




const Navbar = ({setShowPopUp}) => {

    const [menu,setMenu]=useState("home")
    const {token,setToken,cartTotal}=useContext(StoreContext)
    const navigate= useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("")
        navigate("/")
    }


  return (
    <div className='navbar'><img className="logo" src={assets.logo} alt=''/>
        <ul className='navbar-menu'>
            <Link to={"/"} onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a  href='#explore-menu-container' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile app")} className={menu==="mobile app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img className='search-icon' src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
              <Link to='/Cart'><img  src={assets.basket_icon} alt=''/></Link>  
                <div className='navbar-dot'></div>

            </div>
            {!token? <button onClick={()=>setShowPopUp(true)} className='sign-in-button'>sign in</button>
            : <div className="navbar-profile">
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')} > <img src={assets.bag_icon} alt="" /> <p>Orders</p> </li>
                <hr />
                <li onClick={logout} ><img src= {assets.logout_icon}alt="" /> <p>Logout</p> </li>
              </ul>
            </div>
          
              } 
            
        </div>
    
    
    </div>
  )
}

export default Navbar
