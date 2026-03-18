import axios from "axios";
import { useNavigate } from "react-router-dom";

const handleLogout = () => {
    const navigate = useNavigate();
    
    const handleLogoutClick = async () => {
        try {
            await axios.post("http://localhost:3000/api/auth/logout", {}, {
                withCredentials: true
            });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button 
                className="bg-yellow-600 hover:bg-yellow-800 text-white font-semibold text-lg py-2 px-4 rounded" 
                onClick={handleLogoutClick}
            >
                Logout
            </button>
        </div>
    );
};

export default handleLogout;

