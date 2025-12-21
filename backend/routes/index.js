import express from "express";
const router=express.Router();
import userRouter from "./user.js";
import hotelRouter from "./hotel.js";
import roomRouter from "./rooms.js";
import authRouter from "./auth.js"

router.use('/user',userRouter);
router.use('/hotel',hotelRouter);
router.use('/room',roomRouter)
router.use('/auth',authRouter)

export default router;