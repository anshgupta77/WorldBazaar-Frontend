import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import removeCurrentUser from "../Slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
    const {email} = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () =>{
        dispatch(removeCurrentUser);
        navigate("/login");
    }
    return ( 
        <div>
            <h1>Profile Page</h1>
            {email}
            <button onClick={handleLogout}>logout</button>
        </div>
     );
}
 
export default ProfilePage;