import React,{useState} from 'react'

import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  const [Category,setCategory]=useState("All")
  return (
    <div className='home'>
        <Header/>
        <ExploreMenu Category={Category} setCategory={setCategory}/>
        <FoodDisplay Category={Category}/>
        <AppDownload/>
    </div>
  )
}

export default Home