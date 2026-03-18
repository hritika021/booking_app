import dotenv from "dotenv";
dotenv.config();   
import express from 'express';
import cors from "cors"
import connect from './db.js';
import mongoose from 'mongoose';
import mainRouter  from './routes/index.js'
import cookieParser from "cookie-parser";

const app=express();
const router=express.Router();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use('/api',mainRouter)
connect();

  
app.listen(3000,()=>{
    console.log("Connected to backend!")
})