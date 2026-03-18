import express from "express";
import bcrypt from "bcryptjs";
import zod, { email } from "zod"
import User from "../models/User.js";
import jwt from "jsonwebtoken"
import { logoutController } from "../controllers/logoutController.js";
import { login, register } from "../controllers/authController.js";
const router=express.Router();

router.post("/register", register)
   



router.post("/login",login)
   

router.post('/logout',logoutController)
export default router
