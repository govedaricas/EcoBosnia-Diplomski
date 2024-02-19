import "./destinationCarousel.styles.scss";
import rafting from '../../images/rafting.jpg';


import { useState } from 'react';
import { styled } from "@mui/material";
import { Button, Icon, Col } from 'antd';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ItemsCarousel from 'react-items-carousel';


const noOfItems = 7;
const noOfCards = 2;
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

const carouselItems = listOfData.map(index => (
  <img className="slideItem" src={index.src} />
));





export default function DestinationsCarousel(){
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="wrapper">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        infiniteLoop={true}
        gutter={20}
        leftChevron={<KeyboardArrowLeftIcon/>}
        rightChevron={<KeyboardArrowRightIcon/>}
        outsideChevron
        chevronWidth={chevronWidth}
        style={{display:'relative'}}
      >
        {
          listOfData.map(index => (
            <img key={index.id} className="slideItem" src={index.src} />
          ))
        }
      </ItemsCarousel>
    </div>
  );
}