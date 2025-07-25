import React,{useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,img,description,price}) => {
  
  const {cartItems,addToCart,removeFromCart,setCartItems,url}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={img}  className="food-item-img"  />

            {
  !cartItems?.[id] ? (
    <button onClick={() => addToCart(id)} className="add-to-cart-sign">+</button>
  ) : (
    <div className="manipulate-item-count">
      <img onClick={() => addToCart(id)} className="manipulate-icon" src={assets.add_icon_green} />
      <p>{cartItems[id]}</p>
      <img onClick={() => removeFromCart(id)} className="manipulate-icon" src={assets.remove_icon_red} />
    </div>
  )
}

            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem