import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelId;
    const newRoom=new Room(req.body);
    try{
const savedRoom=await newRoom.save();
try{
    await Hotel.findByIdAndUpdate(hotelId, {$push:{rooms:savedRoom._id}})// push is used to push the sacvedRoom data in rooms field of hotel

}catch(err){
next(err);
}
res.status(200).json(savedRoom);

    }catch(err){
next(err);
    }
}



export const updateRoom= async(req,res)=>{
    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updatedRoom);

    }catch(err){
res.status(500).json(err)
    }

}

export const deleteRoom=async(req,res)=>{
    try{
        const updatedRoom=await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room has been deleted");

    }catch(err){
res.status(500).json(err)
    }

}

export const findRoom=async(req,res)=>{
try{
    const room=await Room.findById(req.params.id);
    res.status(200).json(room)
}
catch(err){
    res.status(500).json(err)
}
}

export const allRooms=async(req,res)=>{
   try{
     const rooms=await Room.find();
    res.status(200).json(rooms);
   }
catch(err){
    res.status(500).json(err)
}

}