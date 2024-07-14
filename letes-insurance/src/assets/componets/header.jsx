import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/letelogo.png';


export default function AppHeader() {
    return(

        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='top-head'>
          <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About us">About Us</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Insurance plans">Insurance plans</Nav.Link>
              <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#FAQs">FAQs</Nav.Link>
              <Nav.Link href="#Contact us">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}