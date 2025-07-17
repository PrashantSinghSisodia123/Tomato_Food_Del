import userModel from '../models/userModel.js'

// add item to the cart 
 const addToCart = async(req,res)=>{
    try{
let userData = await userModel.findOne({_id:req.body.userId});
let cartData = await userData.cartData;
if(!cartData[req.body.itemId]){
    cartData[req.body.itemId]=1;
}
else{
    cartData[req.body.itemId]+=1;
}
await userModel.findByIdAndUpdate(req.body.userId,{cartData})
 res.json({success:true,message:"Added to Cart"})
}
catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
}
}

 //Remove item from the cart 
  
const removeFromCart = async(req,res)=>{

try{
let userData = await userModel.findOne({_id:req.body.userId});
let cartData = await userData.cartData;
if(cartData[req.body.itemId]>0){
    cartData[req.body.itemId]-=1;
}

await userModel.findByIdAndUpdate(req.body.userId,{cartData})
 res.json({success:true,message:"Removed from Cart"})
}
catch(err){
    console.log(err)
    res.json({success:false,message:"Error"})
}

 }

 // fetch cart data of user 

 const getCart = async(req,res)=>{

    try{
        let userData = await userModel.findById(req.body.userId);
         if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
 }

 export {addToCart,removeFromCart,getCart}