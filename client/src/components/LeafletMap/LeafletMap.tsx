import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Routing } from "./Routing";
import "./LeafletMap.styles.scss"

interface Props{
    coordinates:[number,number],
    destName:string
}


export function LeafletMap({coordinates,destName}:Props){
    return(
    <MapContainer className="mapa" center={coordinates} zoom={13} attributionControl={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     
  />
  <Marker position={coordinates}>
    <Popup>
      {destName}  
    </Popup>
  </Marker>
  <Routing coordinates={coordinates}/>
</MapContainer>
    )
}
