import mongoose from "mongoose";
 export const connectDb = async() =>{
try{ 
    await mongoose.connect(process.env.DB_PASSWORD)
    console.log("Database is connected.")
}
catch(error){
    console.log("Database connection is failed",error)
}

 }