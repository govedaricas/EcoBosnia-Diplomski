import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});
interface Objekat{
  latitude:number,
  longitude:number,
}
interface Params{
  coordinates:[number,number]
}
export  function Routing({coordinates}:Params) {
  const [currentCoordinates, setCurrentCoordinates] = useState<Objekat>({
    latitude:2,
    longitude:2
  });
  const map = useMap();

  useEffect(() => {
    console.log("Updated currentCoordinates:", currentCoordinates);
  }, [currentCoordinates]);

   useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
       const {latitude,longitude}=position.coords;
      
       const objekat:Objekat={latitude,longitude};
       setCurrentCoordinates({latitude:objekat.latitude,longitude:objekat.longitude});
       console.log(currentCoordinates);
       return { latitude, longitude };
     });
   },[]);
   
  useEffect(() => {
    if (!map) return;
    const {latitude,longitude}=currentCoordinates;
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(coordinates), L.latLng(latitude, longitude)],
      routeWhileDragging: true,
      show:false,
      draggable: false,
      draggableWaypoints :false,
      addWaypoints :false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map,currentCoordinates]);

  return null;
}
