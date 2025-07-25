import mongoose from "mongoose";

 const foodSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
    category:{type:String,required:true}
 })

 const foodModel=  mongoose.model.Food ||  mongoose.model("Food",foodSchema)   //if already created then use it else create one 


 export default foodModel