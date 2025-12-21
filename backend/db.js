import mongoose from "mongoose";
const connect= async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hotel_booking")
        console.log("Connected to mongodb");

    }catch(error){
        throw error
      
    }
}


export default connect