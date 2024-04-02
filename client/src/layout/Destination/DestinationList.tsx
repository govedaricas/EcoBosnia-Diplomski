import { Destination } from "../../app/models/Destination";
import DestinationCard from "./DestinationCard";
import './styles.scss';

interface Props{
    destinations:Destination[]
}

export default function DestinationList({destinations}:Props){
    
    return(
        <div className="div1" >
            {
            destinations.map(destination=>(
                <DestinationCard key={destination.id}  destination={destination} />
            )
            )}
        </div>
    )
}