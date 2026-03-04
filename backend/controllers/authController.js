const jwt=require("jsonwebtoken");
const zod=require("zod");
const bcrypt=require("bcrypt");
const { default: User } = require("../models/User");
const registerSchema=zod.object({
    firstName:zod.string(),
    lastName:zod.string(),
    email:zod.email(),
    password:zod.string()

})
router.post('/register', async(req,res)=>{
    const result=registerSchema.safeParse(req.body);
    if(!result.success){
       return res.status(400).json({
        msg:"Invalid inputs"
        })
    }
    
    const {firstName,lastName,email,password}=result.data;
    const user=await User.findOne({
        email
    })
if(user){
    return res.json({
        msg:"User already exists"
    })
}

const hashedPassword= await bcrypt.hash(password,10)
const newUser=await User.create({
    firstName,
    lastName,
    email,
    password:hashedPassword
})
    
const userId=newUser._id;

const token=jwt.sign({
    userId
},process.env.JWT_SECRET);

res.json({
    msg:"User created successfully",
token: token
})

})

const loginSchema=zod.object({
    email:zod.string(),
    password:zod.string(),
})
router.post('/login', async(req,res)=>{
    const result=loginSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            msg:"Invalid inputs"
        })
    }
    const {email,password}=result.data;

    const findUser=await User.findOne({
        email
    })
    if(!findUser){
        return res.status(401).json({
            msg:"Invalid username or password"
        })
    }

    const isPassword=await bcrypt.compare(password,findUser.password);
    if(!isPassword){
    return res.status(401).json({
        msg:"Invalid username or password"
    })
}   

const token=jwt.sign({userId:findUser._id},JWT_SECRET);
return res.json({
    msg:"Signin succesful",
    token
})


})
