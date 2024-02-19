import { useEffect, useState } from 'react'

import './styles.css'
import { Destination } from './app/models/Destination';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch } from './app/store/configureStore';
import { fetchCurrentUser } from './components/Account/AccountSlice';

function App() {
  const[destinations,setDestinations]=useState<Destination[]>([]);
  const dispatch=useAppDispatch();
  useEffect(()=>{

    fetch('http://localhost:5000/api/Destination')
    .then(response=>response.json())
    .then(data=>setDestinations(data))
  },[])
  useEffect(()=>{
    dispatch(fetchCurrentUser());
  },[dispatch])
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  //const firstDestination= destinations[0];

  return (
   
      <>
        {(!isHomePage) && <NavBar />}
        <Outlet />
        
        
      </>
  )
}

export default App
