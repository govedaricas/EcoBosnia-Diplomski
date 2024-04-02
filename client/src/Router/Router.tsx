import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import DestinationDetails from "../layout/Destination/DestinationDetails";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import RequireAuth from "./RequireAuth";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {element: <RequireAuth />,
             children:[
                {
                    path:'about/:type',
                    element:<About/>,
                },
            ]},
            {path:'home',element:<Home/>},
            {path:'destination/:id',element:<DestinationDetails/>},
            {path:'signIn',element:<SignIn/>},
            {path:'signUp',element:<SignUp/>},
        ]
    }
])