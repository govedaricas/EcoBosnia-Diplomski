import { useState, useEffect } from "react";
import { Destination } from "../../app/models/Destination";
import './home.styles.scss';
import { ImageSlider } from "../ImageSlider/ImageSlider";
import NavBar from "../NavBar/Navbar";
import rafting from '../../images/proba.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
			<div className="row align-items-center justify-content-between" data-aos="fade-up">
				<div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
					<div className="image-stack mb-5 mb-lg-0">
						<div className="image-stack__item image-stack__item--bottom"   >
							<img src={rafting} alt="Image" className="img-fluid rellax "/>
						</div>
						<div className="image-stack__item image-stack__item--top"  data-aos-delay="100"  data-rellax-percentage="0.5">
							<img src={rafting} alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
				<div className="col-lg-4 order-lg-1">

					<div data-aos="fade-up">
						<h2 className="heading mb-3"  data-aos-delay="100">Explore All Corners of The World With Us</h2>

						<p  data-aos-delay="200">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

						<p  data-aos-delay="300">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

						<p className="my-4"  data-aos-delay="300"><a href="/about" className="btn btn-primary">View All</a></p>
					</div>
				</div>
				
			</div>

		</div>		
	</div>



          <div className="services_section layout_padding">
      <div className="container" data-aos="fade-up">
         <h1 className="services_taital" >Services </h1>
         <p className="services_text" >There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration</p>
         <div className="services_section_2">
            <div className="row">
               <div className="col-md-4">
                  <div><img src={rafting} className="services_img"></img></div>
                  <div className="btn_main"><a href="#">Rafting</a></div>
               </div>
               <div className="col-md-4">
                  <div><img src={rafting} className="services_img"></img></div>
                  <div className="btn_main active"><a href="#">Hiking</a></div>
               </div>
               <div className="col-md-4">
                  <div><img src={rafting} className="services_img"></img></div>
                  <div className="btn_main"><a href="#">Camping</a></div>
               </div>
            </div>
         </div>
      </div>
   </div>
          </>
    )
}