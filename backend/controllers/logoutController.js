export const logoutController=(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
    }).status(200).json({
        msg:"Logged out"    
    })
};