import './footer.styles.scss';
import logo from './../../images/logo1.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
    return(
        <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo"><img src={logo} /></div>
        <ul className="footer-menu">
          <li>About</li>
          <li>Privacy</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
      <hr></hr>
      <div className="footer-bottom">
      <div className='icons'> 
      <div className='icons-list'>
        <InstagramIcon className='icon' />
       <TwitterIcon className='icon'/>
       <FacebookIcon className='icon'/> 
      </div>

       <p>© 2022 visitBosnia™, All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}