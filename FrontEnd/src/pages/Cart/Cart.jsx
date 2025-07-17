import React, { useContext, useState ,useEffect} from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import CartItem from '../../Components/CartItem/CartItem'
import CartTotal from '../../Components/CartTotal/CartTotal'
import CartPromoCode from '../../Components/CartPromoCode/CartPromoCode'
const Cart = () => {
  const {cartItems,food_list,addToCart,removeFromCart,setCartItems,cartTotal}=useContext(StoreContext)
  

  return (
    <div  className='cart' >
      <div className="cart-list">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p></div>
        <hr />
        <div className="cart-item-list">  
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            
            return (         
                <CartItem key={index} image={item.image} id={item._id} name={item.name} price={item.price} quantity={cartItems[item._id]} />
                    
            )
          }
        })}
        </div>
        <div className="cart-total-and-promocode-section">
          <CartTotal cartTotal={cartTotal}  />
          <CartPromoCode/>
        </div>

    </div>
  )
}

export default Cart
