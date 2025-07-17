
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Verify from './pages/verify/Verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx'
const App = () => {
  const [showPopUp,setShowPopUp]=useState(false)
  return (
    <>
    {showPopUp?<LoginPopUp setShowPopUp={setShowPopUp} />:<></>}
    <div className='app'>
      <Navbar setShowPopUp={setShowPopUp} />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder  />}/>
      <Route path="/verify" element={<Verify/>}/>
      <Route path='/myorders'element={<MyOrders/>} ></Route>
      </Routes>
      
      </div>
      <Footer/>
      </>
  )
}

export default App