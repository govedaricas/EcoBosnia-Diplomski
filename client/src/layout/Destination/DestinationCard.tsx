import './styles.scss';
import { faDisplay, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faComment } from '@fortawesome/free-solid-svg-icons';
import { Destination } from '../../app/models/Destination';
import { Button } from 'react-bootstrap';

interface Props{
    destination:Destination
}

export default function DestinationCard({destination}:Props){
    const{id,name,description,type,imageUrl}=destination;

    return(
       // className="col-md-4"
            <div className="col-md-4">
            <div className="card card-blog ">
        <div className="card-image">
            <a href="#"> <img className="img" src={imageUrl}></img> </a>
            <div className="ripple-cont"></div> 
        </div>
        <div className="table">
            <h6 className="category text-success"><i className="fa fa-university"></i>{type}</h6>
            <h4 className="card-caption">
        <a  href={`/destination/${id}`}>{name}</a>
        </h4>
            <p className="card-description" >{`${description.substring(0,41)} ...`}</p>
            {/* <div className="ftr">
                <div className="author">
                    <a href="#"> <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="..." className="avatar img-raised"></img> <span>Mary Dunst</span> </a>
                </div>
                <div className='stats'> <FontAwesomeIcon icon={faHeart} /> 342 &nbsp; <FontAwesomeIcon icon={faComment} /> 45 </div> 
                
            </div> */}
        </div>
    </div>
        </div>
    )
}