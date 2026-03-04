import mongoose from "mongoose";

const RoomSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
 
    },
    price:{
        type:Number,
        required:true,
     
    
},

desc:{
        type:String,
        required:true,
},

roomNumbers:[{number:Number, unavailableDates:[{type:Date}]}],// Array of  room numbers having same title description and other details and collection of reserved dates or unavailable dates
},
{timestamps:true})

const Room = new mongoose.model("Room",RoomSchema)
export default Room;