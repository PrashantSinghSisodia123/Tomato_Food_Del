import React,{useContext}from 'react'
import './CartItem.css'
import { StoreContext } from '../../context/StoreContext'
const CartItem = ({name,image,price,quantity,id}) => {
  const {cartItems,removeFromCart,setCartItems,url}=useContext(StoreContext)
  return (<div>
    <div className='cart-item'>
        <img src={image}  className="cart-item-image" />
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">${price}</p>
        <p className="cart-item-quantity">{quantity}</p>
        <p className="cart-item-total">${price*quantity}</p>
        <p onClick={()=>removeFromCart(id)} className="cart-item-remove">X</p>
    </div>
    <hr className="cart-item-hr" />
    </div>
  )
}

export default CartItem