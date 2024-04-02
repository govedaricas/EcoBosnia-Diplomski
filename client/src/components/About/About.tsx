import { useState, useEffect } from "react";
import { Destination } from "../../app/models/Destination";
import DestinationList from "../../layout/Destination/DestinationList";
import './about.styles.scss';
import { DestinationsCarousel } from "../../layout/Destination/DestinationsCarousel";
import { useParams } from "react-router-dom";

export default function About(){
    const[destinations,setDestinations]=useState<Destination[]>([]);
    const {type}=useParams();
  useEffect(()=>{
    fetch('http://localhost:5000/api/Destination')
    .then(response=>response.json())
    .then(data=>setDestinations(data))
  },[])
  console.log("PARAMS:",type);

  useEffect(()=>{
    if(type!=null && type!="all"){
      const filteredDestinations = destinations.filter(destination => destination.type === type);
      if (JSON.stringify(filteredDestinations) !== JSON.stringify(destinations)) {
        setDestinations(filteredDestinations);
      }
      console.log(destinations);
    }
  },[type,destinations])
    return(
      <div className="about-container">
      <hr className="horizontal-line"/>
      <div className="about-cards-container">
              
      <DestinationList destinations={destinations} />
    </div>
    </div>
    )
}