import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Destination } from "../../app/models/Destination";
import "./destinationDetails.styles.scss";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-owl-carousel/src/OwlCarousel'
import DestinationsCarousel from "./DestinationsCarousel";
import Comments from "../../components/comments/Comments";
import { LeafletMap } from "../../components/LeafletMap/LeafletMap";
import "leaflet/dist/leaflet.css";

import {storage} from "../../firebase";
import {ref,listAll,getDownloadURL} from "firebase/storage";

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.3/owl.carousel.min.js"></script>


export default function DestinationDetails(){
    const {id}=useParams<{id:string}>();
    const[destination,setDestination]=useState<Destination |null>(null);
    const [imageList,setImageList]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/Destination/${id}`)
    .then(response=>response.json())
    .then(data=>setDestination(data))
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  },[id])
  const imageListRef=ref(storage,`${destination?.name}/`);

  useEffect(()=>{
   listAll(imageListRef).then((response)=>{
     response.items.forEach((item)=>{
       getDownloadURL(item).then((url)=>{
         setImageList((prev)=>[...prev, url]);
       });
     })
   })
 },[])

  if(!destination) return <h3>Destination not found</h3>

    return(
      <div className="details-container">
      <hr className="horizontal-line"/>
      

      <div className="about_section layout_padding">
      <div className="container-fluid">
         <div className="row">
         <div className="col-md-6 padding_right_0">
               <div><img src={destination.imageUrl} className="about_img"></img></div>
            </div>
            <div className="col-md-6">
               <div className="about_taital_main">
                  <h1 className="about_taital">{destination.name}</h1>
                  <p className="about_text">{destination.description}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="carousel-wrapper"><br/>
      <h1>More images</h1>
   <DestinationsCarousel imageListRef={imageListRef}/>
   </div>
   
   
   <div className="tableAndMap">
   <table className="table table-hover ">
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{destination.name}</td>
    </tr>
    <tr>
      <th scope="row">Type</th>
      <td>{destination.type}</td>
    </tr>
    <tr>
      <th scope="row">Location information</th>
      <td>
         <div className="tableContainer">
            <p>Country: Bosnia</p>
            <p>City: {destination.name}</p>
         </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Activities and Attractions</th>
      <td>
         <div className="tableContainer">
            <p>Popular activities: {destination.detailsUrl} </p>
         </div>
      
      </td>
    </tr>
  </tbody>
</table>

<div>
<LeafletMap coordinates={[destination.coordinateA,destination.coordinateB]} destName={destination.name} />
</div>
   </div>
   

   <div className="destination-comments-div">
   <Comments destinationId={id} currentUserId="1" />
   </div>
      </div>
    )
}