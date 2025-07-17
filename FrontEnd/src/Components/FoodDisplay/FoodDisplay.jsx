import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext.jsx'

const FoodDisplay = ({ Category }) => {
  const { food_list } = useContext(StoreContext)
  console.log("Category selected:", Category);
  console.log("food_list:", food_list);

  const filteredFoodList = food_list.filter(
    item => Category === "All" || Category === item.category
  )
console.log("Filtered list:", filteredFoodList);
  return (
    <div className='food-display-container'>
      <h2>Top Dishes near you</h2>
      <div className='food-display-list'>
        {
          filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              price={item.price}
              img={item.image}
              description={item.description}
              category={item.category}
              name={item.name}
              id={item._id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FoodDisplay
