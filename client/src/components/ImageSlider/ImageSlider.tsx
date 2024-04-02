
import './imageslider.styles.scss';
import { Carousel } from 'react-bootstrap';
import slika1 from '../../images/slika1.jpg';
import slika2 from '../../images/slika2.jpg';
import slika3 from '../../images/slika3.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export function ImageSlider(){
    
    return (
        <Carousel fade className='carousel-image-slider' >
          
      <Carousel.Item >
      <img className="slika" src={slika3} ></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2> </Carousel.Caption>
         <Carousel.Caption className='carousel-caption'>
          <h3><PlaceOutlinedIcon /> Zelengora </h3>
          <p>Nature is the source of all true knowledge</p>
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


      <Carousel.Item >
      <img className="slika" src={slika1} ></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2> </Carousel.Caption>
         <Carousel.Caption>
         <h3><PlaceOutlinedIcon /> Pliva lake </h3>
          <p>Adopt the pace of nature: her secret is patience</p>
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


      <Carousel.Item >
      <img className="slika" src={slika2} ></img>
      <Carousel.Caption className='naslov'><h2>visit Bosnia</h2> </Carousel.Caption>
         <Carousel.Caption>
         <h3><PlaceOutlinedIcon /> Boračko lake </h3>
          <p>Time wasted at the lake is time well spent.</p>
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
    </Carousel>
    );
}