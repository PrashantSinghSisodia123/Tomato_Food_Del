import React from 'react'
import './CartTotal.css'
import { useNavigate } from 'react-router-dom'
const CartTotal = ({cartTotal}) => {

  
  const navigate=useNavigate();
 function handleNavigation(){
navigate('/PlaceOrder')
 }
  return (
    
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
      <button onClick={handleNavigation} className="proceed-to-checkout-btn">PROCEED TO CHECKOUT</button>
    </div>
  </div> )
}

export default CartTotal