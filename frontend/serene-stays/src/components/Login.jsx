import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
export const Login=()=>{
    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    return (
        <div className="bg-yellow-100/30 h-screen flex justify-center  ">
<div className="flex flex-col justify-center">
                <div className="flex flex-col bg-white max-w-7xl rounded-md p-8 shadow-lg w-[50vw] md:w-[30vw]">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold mb-6">Login</h1>
                    </div>
                    
              
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} className="border border-gray-300 rounded-md py-2 mb-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <label htmlFor="email">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} className="border border-gray-300 rounded-md py-2 mb-3px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="hover:bg-yellow-700 bg-yellow-600 mt-10 rounded-md text-white font-semibold p-2"
                    onClick={async()=>{
     const information={email,password}
     try{
        const result=await axios.post("http://localhost:3000/api/auth/login",information,{
            withCredentials:true
        });
        navigate("/")
        console.log(result.data)
     }
     catch(err){
        console.log(err)
        }
                    }}>Login</button>
             
  </div>

</div>

        </div>
    )
}