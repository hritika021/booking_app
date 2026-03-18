export const logoutController=(req,res)=>{
    res.clearCookie("access_token",{
        httpOnly:true,
        path:"/"
    }).status(200).json({
        msg:"Logged out"    
    })
};
