import React,{createContext, useContext,useEffect,useState} from 'react'
import { food_list } from '../assets/assets';
import axios from 'axios'
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const url= import.meta.env.VITE_URL
    const [cartItems,setCartItems]=useState({})
    const [cartTotal,setCartTotal]=useState(0)
    const [token,setToken]=useState("")
    const [food_list,setFood_list]=useState([])
    useEffect(() => {
        const total = food_list.reduce((acc, item) => {
          if (cartItems[item._id] > 0) {
            acc += cartItems[item._id] * item.price;
          }
          return acc;
        }, 0);
        setCartTotal(total); // Set the total only once
      }, [cartItems, food_list])



      const loadCartData =async(token)=>{
        const response = await axios.post(url+"/api/cart/get",{hey:"how are you"},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    const addToCart=async(id)=>{
        if(!cartItems[id]){
            setCartItems(prev=>({...prev,[id]:1}))
        }
        else{
            setCartItems(prev=>({...prev,[id]:prev[id]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId:id},{headers:{token}})
        }
    }
    const  removeFromCart= async(id)=>{
        setCartItems(prev=>({...prev,[id]:prev[id]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId:id},{headers:{token}})
        }
    }

    const fetchFoodLIst=async()=>{
        const response =await axios.get(url+'/api/food/list');
        setFood_list(response.data.data)
    }
      
    useEffect(()=>{
       
        async function loadData(){
            await fetchFoodLIst()
             if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
            await loadCartData(localStorage.getItem("token"));
        }
        }
        loadData()
    },[])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartTotal,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider