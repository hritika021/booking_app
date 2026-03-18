import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserProfile=()=>{
    const [open,setOpen]=useState(false);
    const handleLogout=async()=>{
        try{
            await axios.post("http://localhost:3000/api/auth/logout",{},{
                withCredentials:true
            });
            navigate("/login")
        }
        catch(err){
            console.log(err)
        }
    
    }
    const navigate=useNavigate();
return (
    <div className="relative">
        <button onClick={()=>{
            setOpen(!open)
        }}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


        </button>

        {
            open && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border px-4 py-2 ">
  <button
            onClick={() => navigate("/profiles")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
         Profile
          </button>
  <button
            onClick={() => navigate("/bookings")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Bookings
          </button>

          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>

                </div>
            )
        }

    </div>
)

}