import { useState, useEffect } from "react";
import { Destination } from "../../app/models/Destination";
import './home.styles.scss';
import { ImageSlider } from "../ImageSlider/ImageSlider";
import NavBar from "../NavBar/Navbar";
import pocetna1 from '../../images/pocetna1.jpg';
import rafting from '../../images/rafting.jpg';
import hiking from '../../images/hiking.jpg';
import camping from '../../images/camping.jpg';
import pocetna2 from '../../images/pocetna2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../Buttons/Button";


export default function Home(){
    const[destinations,setDestinations]=useState<Destination[]>([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/Destination')
    .then(response=>response.json())
    .then(data=>setDestinations(data))
  },[])
  useEffect(() => {
    AOS.init();
  }, [])
    return(

      <>
        <div className="home ">
          <div className="imageSlider" >
          
          <ImageSlider />
          <div className="navbar-home">
          <NavBar />
          </div>
          
          </div>

          </div>

          <div className="section section-2">
		<div className="container-section">
			<div className="row align-items-center justify-content-between" data-aos="fade-up" data-aos-delay="300">
				<div className="home-images col-lg-6 order-lg-2 mb-5 mb-lg-0">
					<div className="image-stack mb-5 mb-lg-0">
						<div className="image-stack__item image-stack__item--bottom"   >
							<img src={pocetna1} alt="Image" className="img-fluid  "/>
						</div>
						<div className="image-stack__item image-stack__item--top image-stack"  data-aos-delay="100"  data-rellax-percentage="0.5">
							<img src={pocetna2} alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
				<div className="home-tekst col-lg-4 order-lg-1">

					<div data-aos="fade-up" data-aos-delay="300">
						<h1 className=" mb-3"  data-aos-delay="100">Explore Bosnia<br/> Green Paradise</h1>
						<p >Welcome to the land of untouched beauty. Bosnia and Herzegovina offers a wealth of ecological destinations waiting to be explored.<br/> Discover your path through the greenery of forests, crystal-clear rivers, and impressive mountain peaks. Click below and embark on your adventures!</p>
						<a href="/about/all" ><Button name="View More"></Button></a>
					</div>
				</div>
				
			</div>

		</div>		
	</div>
   <div className="home-hr">
   <hr data-aos="fade-up" data-aos-delay="300"></hr>
   <hr data-aos="fade-up" data-aos-delay="300"></hr>
   <hr data-aos="fade-up" data-aos-delay="300"></hr>
   <hr data-aos="fade-up" data-aos-delay="300"></hr>
   </div>

          <div className="services_section layout_padding">
      <div className="container" data-aos="fade-up">
         <h1 className="services_taital" >Most popular Eco Adventures</h1>
         <p className="services_text" >Discover Bosnia and Herzegovina's top eco-friendly attractions with thrilling rafting adventures, serene camping experiences, and exhilarating mountain hikes.</p>
         <div className="services_section_2">
            <div className="row">
               <div className="col-md-4">
                  <div><img src={rafting} className="services_img"></img></div>
                  <a className="eco-adventure-name" href="/about/rafting">Rafting</a>
               </div>
               <div className="col-md-4">
                  <div><img src={hiking} className="services_img"></img></div>
                   <a className="eco-adventure-name" href="/about/hiking">Hiking</a>
               </div>
               <div className="col-md-4">
                  <div><img src={camping} className="services_img"></img></div>
                  <a className="eco-adventure-name" href="#">Camping</a>
               </div>
            </div>
         </div>
      </div>
   </div>
          </>
    )
}