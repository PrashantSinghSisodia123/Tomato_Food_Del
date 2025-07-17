import express from "express";
import multer from "multer";
import { AddFood, ListFood, RemoveFood } from "../controllers/FoodController.js";



const foodRouter=express.Router();

const storage=multer.memoryStorage()

const upload=multer({storage})


foodRouter.post("/add",upload.single("image"), AddFood)
foodRouter.get("/list",ListFood)
foodRouter.post("/remove",RemoveFood)


export default foodRouter