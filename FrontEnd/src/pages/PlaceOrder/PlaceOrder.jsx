import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const {cartTotal,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
 
  const onChangeHandler =(event)=>{
    const name =event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder= async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo);
      }
    })
    let orderData ={
      address:data,
      items:orderItems,
      amount:cartTotal+2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }


  }
  const navigate=useNavigate()
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(cartTotal===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-holder">
      <div className="place-holder-left">
     <p className="title">Delivery Information</p>
      <div className="multiline-inputs">
        <input required onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' name='firstName' ></input>
        <input  required onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' name='lastName' ></input>
      </div>
      <div className="single-line-inputs">
        <input  required onChange={onChangeHandler} value={data.email} type='email' placeholder='Email address' name='email'  ></input>
      </div>
      <div className="single-line-inputs">
        <input  required onChange={onChangeHandler} value={data.street} type='text' placeholder='Street'name='street' ></input>
      </div>
      <div className="multiline-inputs">
        <input  required onChange={onChangeHandler} value={data.city} type="text" placeholder='City' name='city' ></input>
        <input  required onChange={onChangeHandler} value={data.state} type="text" placeholder='State'name='state' ></input>
      </div>
      <div className="multiline-inputs">
        <input  required onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'name='zipcode' ></input>
        <input  required onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'name='country' ></input>
      </div>
      <div className="single-line-inputs">
        <input  required onChange={onChangeHandler} value={data.phone} type='tel' placeholder='Phone'name='phone' ></input>
      </div>
      </div>
      <div className="place-holder-right">
      <div className="cart_total-container">
      <h1 className="cart-total-header">Cart Totals</h1>
    <div className="cart-total-display">
      <div className="cart-total-subtotal">
        <p>Subtotal</p>
        <p>${cartTotal}</p>
      </div>
      <hr className="horizontal-line" />
      <div className="cart-total-delivery-fee">
        <p>Delivery Fee</p>
        <p>$2</p>
      </div>
      <hr className="horizontal-line" />
      <div className="cart-total">
        <p>Total</p>
        <p>${cartTotal+2}</p>
      </div>
      <hr className="horizontal-line" />
      <button type='submit' className="proceed-to-payment-btn">PROCEED TO PAYMENT</button>
    </div>
    </div>
  </div>
      
    </form>
  )
}

export default PlaceOrder