import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/store/configureStore";
import { fetchCurrentUser, setUser } from "../components/Account/AccountSlice";

export default function RequireAuth(){
    //const{user}=useAppSelector(state=>state.account);
    const user=localStorage.getItem('user');
    const location=useLocation();
    if(user==null){
        return(
            <>
            <Navigate to='signIn' state={{from:location}} />
            </>)
    }

    else return <Outlet />
}