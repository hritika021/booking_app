import dotenv from "dotenv";
dotenv.config();   
import express from 'express';
import connect from './db.js';
import mongoose from 'mongoose';
import mainRouter  from './routes/index.js'
import cookieParser from "cookie-parser";

const app=express();
const router=express.Router();
app.use(cookieParser())
app.use(express.json());
app.use('/api',mainRouter)
connect();

  
app.listen(3000,()=>{
    console.log("Connected to backend!")
})