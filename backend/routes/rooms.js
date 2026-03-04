import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { allRooms, createRoom, deleteRoom, findRoom, updateRoom } from "../controllers/roomController.js";
const router=express.Router();

router.post("/:hotelId",verifyAdmin,createRoom);
router.put("/:id",verifyAdmin,updateRoom);
router.delete("/:id",verifyAdmin,deleteRoom);
router.get("/:id",findRoom);
router.get("/",allRooms)

export default router;