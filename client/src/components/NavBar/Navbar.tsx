import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import PersonIcon from '@mui/icons-material/Person';
import { Icon, Typography } from '@mui/material';
import { signOut } from '../Account/AccountSlice';
import logo from '../../images/logo1.png' ;
import SearchBox from '../Buttons/SearchBox';
import { Link } from 'react-router-dom';

function NavBar() {
  const {user}=useAppSelector(state=>state.account);
  const dispatch=useAppDispatch();


  
  return (
    <Navbar   className="navbar " >
        <Container >
          <Navbar.Brand href="/" className='logo' style={{color:'white'}}><img src={logo} className='logo'></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='navbar-tekst'>Home</Nav.Link>
            <Nav.Link href="/about/all" className='navbar-tekst'>About</Nav.Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='navbar-tekst'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex">
            <SearchBox />
            <Button variant="outline-light" className='navbar-tekst-button'>Search</Button>
          </Form>
          {user?(
              
              <Nav className="me">
              <Nav.Link onClick={()=>dispatch(signOut())} className='navbar-tekst'>Sign Out</Nav.Link>
              <PersonIcon  sx={{marginTop:1.3}} className='navbar-tekst' />
              <Typography sx={{marginTop:1.3}} className='navbar-tekst'>
                {user.username}
              </Typography>
            </Nav>
          ):(
            <Nav className="me">
              <Nav.Link as={Link} to="/signIn" className='navbar-tekst'>Sign In</Nav.Link>
          </Nav>
          )}
          
        </Container>
      </Navbar>
  );
}

export default NavBar;