import { useState, useEffect } from "react";
import { Destination } from "../../app/models/Destination";
import DestinationList from "../../layout/Destination/DestinationList";
import './about.styles.scss';
import { DestinationsCarousel } from "../../layout/Destination/DestinationsCarousel";

export default function About(){
    const[destinations,setDestinations]=useState<Destination[]>([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/Destination')
    .then(response=>response.json())
    .then(data=>setDestinations(data))
  },[])
    return(
      <div className="about-container">
      <hr className="horizontal-line"/>
      <div className="about-cards-container">
              
      <DestinationList destinations={destinations} />
    </div>
    </div>
    )
}