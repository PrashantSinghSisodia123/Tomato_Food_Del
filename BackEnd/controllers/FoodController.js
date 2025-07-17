import foodModel from "../models/FoodModel.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

// Add Food Controller
const AddFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // Upload to Cloudinary
    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "food-items" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result.secure_url, // cloud image URL
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("AddFood error:", error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// List Food
const ListFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
   
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving food items" });
  }
};

// Remove Food
const RemoveFood = async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error removing food" });
  }
};

export { AddFood, ListFood, RemoveFood };
