import express from "express";
import { allUsers, deleteUser, findUser,  updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

router.get('/:id',verifyUser, findUser);
router.delete("/:id",verifyUser,deleteUser);
router.put("/:id",verifyUser, updateUser);
router.get("/",verifyAdmin, allUsers)
export default router;