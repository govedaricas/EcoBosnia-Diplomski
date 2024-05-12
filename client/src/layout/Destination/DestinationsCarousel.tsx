import "./destinationCarousel.styles.scss";
import rafting from '../../images/rafting.jpg';


import { useEffect, useState } from 'react';
import { styled } from "@mui/material";
import { Button, Icon, Col } from 'antd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ItemsCarousel from 'react-items-carousel';

import {storage} from "../../firebase";
import {ref,listAll,getDownloadURL, StorageReference} from "firebase/storage";
import { Destination } from "../../app/models/Destination";
import { useParams } from "react-router-dom";

const chevronWidth = 60;

  
const listOfData = [
  { id: 1, src: rafting, caption: 'Rafting Adventure 1' },
  { id: 2, src: rafting, caption: 'Rafting Adventure 2' },
  { id: 3, src: rafting, caption: 'Rafting Adventure 3' },
  { id: 1, src: rafting, caption: 'Rafting Adventure 1' },
  { id: 1, src: rafting, caption: 'Rafting Adventure 1' },
  { id: 1, src: rafting, caption: 'Rafting Adventure 1' },
  // Add more image objects as needed
];
interface Props{
  imageListRef:StorageReference
}
const carouselItems = listOfData.map(index => (
  <img className="slideItem" src={index.src} />
));

export default function DestinationsCarousel({imageListRef}:Props){
  const [activeItemIndex, setActiveItemIndex] = useState(0);
   const [imageList,setImageList]=useState([]);
   const[destination,setDestination]=useState<Destination |null>(null);
   const {id}=useParams<{id:string}>();
   //const imageListRef=ref(storage,`${destination?.name}/`);
   useEffect(()=>{
    fetch(`http://localhost:5000/api/Destination/${id}`)
    .then(response=>response.json())
    .then(data=>{
        setDestination(data)
      })
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
  },[id])
    
  //const imageListRef=ref(storage,`${destination?.name}/`);

  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev, url]);
        });
      })
    })
  },[])
  return (
    
    <div className="wrapper">
      
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2.5}
        infiniteLoop={true}
        gutter={20}
        leftChevron={<KeyboardArrowLeftIcon/>}
        rightChevron={<KeyboardArrowRightIcon/>}
        outsideChevron
        chevronWidth={chevronWidth}
        style={{display:'relative'}}
      >
        {
          imageList.map(url => (
            <img key={url} className="slideItem" src={url} />
          ))
        }
      </ItemsCarousel>
    </div>
  );
}