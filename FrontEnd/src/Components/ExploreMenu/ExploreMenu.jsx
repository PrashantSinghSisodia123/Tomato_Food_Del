import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({Category,setCategory}) {
  return (
    <div className='explore-menu-container' id='explore-menu-container'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (<div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'> 
                            <img    className={Category===item.menu_name?"Active":""} src={item.menu_image}></img>
                            <p>{item.menu_name}</p>
                </div>
                

                )
            })}
        </div>
            <hr></hr>
    </div>
  )
}

export default ExploreMenu