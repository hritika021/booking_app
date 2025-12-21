import express from "express";
import bcrypt from "bcryptjs";
import zod, { email } from "zod"
import User from "../models/User.js";
import jwt from "jsonwebtoken"
const router=express.Router();
const registerSchema=zod.object({
    name:zod.string(),
    email:zod.email(),
    password:zod.string(),


})
router.post("/register", async(req,res)=>{
   const result=registerSchema.safeParse(req.body )
    if(!result.success){
        return res.status(400).json({
            msg:"Incorrect inputs"
        })
    }
    
    const {name,email,password}=result.data;
    try{
         const user=await User.findOne({
        email
    })
console.log("User found:",user)

if(user){
    return res.status(500).json({
        msg:"Email already taken"
    })
}
const hashedPassword=await bcrypt.hash(password,10);
const newUser=await User.create({
    email,
    password:hashedPassword,
    name}
)  
console.log(user)
const token=jwt.sign({id:newUser._id, isAdmin:newUser.isAdmin},process.env.JWT_SECRET)


res.json({
msg:"USer created successfully",
token,
    newUser
})
    } catch(err){
return res.status(403).json({msg:err})
    }
    
    
})

const loginSchema= zod.object({
    email:zod.email(),
    password:zod.string()
})

router.post("/login", async(req,res)=>{
    const result=loginSchema.safeParse(req.body);
if(!result.success){
    return res.status(403).json({
        msg:"Invalid inputs"
    }) 

}
try{
   const {email,password}=result.data;

    const findUser= await User.findOne({
        email
    })

    if(!findUser){
        return res.status(404).json({
            msg:"User not found"
        })
    }

    const isMatch=await bcrypt.compare(password,findUser.password);
    if(!isMatch){
        return res.status(401).json({
            msg:"Invalid  username or password"
        })
    }

    console.log(findUser)

    const token=jwt.sign({id:findUser._id,isAdmin:findUser.isAdmin}, process.env.JWT_SECRET)
    res.cookie("access_token", token,{
        httpOnly:true,}).status(200).json({
        msg:"Logged in",
        
            findUser: {
        name: findUser.name,
        email: findUser.email
    }
    })
}catch(err){
return res.status(403).json({msg:err})
}
})
export default router
