
import './imageslider.styles.scss';
import { Carousel, Navbar } from 'react-bootstrap';
import slika1 from '../../images/slika1.jpg';
import slika2 from '../../images/slika2.jpg';
import slika3 from '../../images/slika3.jpg'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Navbar';

export function ImageSlider(){
    
    return (
        <Carousel fade className='carousel-image-slider' >
          
      <Carousel.Item >
      <img className="slika" src={slika3} ></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2> </Carousel.Caption>
         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>TKEEEKST</p>
          <div className='button'>
          <Link to="/signIn">
             <button className="btn btn-light"  >Log In</button>
          </Link>
          <Link to="/signUp">
            <button className='btn btn-dark'>Register</button>
          </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="slika" src={slika1}></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2></Carousel.Caption>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="slika" src={slika2}></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2></Carousel.Caption>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}