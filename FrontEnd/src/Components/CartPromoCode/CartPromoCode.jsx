import React from 'react'
import './CartPromoCode.css'
const CartPromoCode = () => {
  return (
    <div className='promocode' >
      <div>
      
    <p className="promocode-text">If you have a promocode, Enter it here</p>
    <div className="promocode-entry-field">
        <input type="text" className="promocode-input" placeholder='promo code' />
        <button className="promocode-btn">Submit</button>
    </div>
    </div>
</div>
)
    
}

export default CartPromoCode