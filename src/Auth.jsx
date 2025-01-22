import { useSelector } from "react-redux";
import  {Outlet, Navigate, useLocation}  from "react-router-dom";

const Auth = () => {
    const user = useSelector(state => state.auth.currentUser);
    const location = useLocation();
    return ( 
        user? <Outlet></Outlet> : <Navigate to="login" state={{from : location.pathname}}></Navigate>
     );
}
 
export default Auth;