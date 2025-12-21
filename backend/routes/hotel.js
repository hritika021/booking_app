import express from "express";
import Hotel from "../models/Hotel.js";
import { allHotels, createHotel, deleteHotel, findHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();

//Create a new hotel
router.post('/',verifyAdmin, createHotel)

//Update a specific hotel
router.put("/:id",verifyAdmin,updateHotel)
 
//Delete a specific hotel
router.delete("/:id",verifyAdmin,deleteHotel )

//Find a specific Hotel
router.get("/:id",findHotel)


//Get all the available hotels
router.get("/",allHotels )




export default router;