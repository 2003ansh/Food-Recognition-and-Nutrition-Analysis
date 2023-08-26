import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sun from './sun.png';
import moon from './moon.png';

export default function Navs(props) {
  return (
    <>
    <Navbar collapseOnSelect expand="lg"  style={
        props.mode === "dark"
          ? { backgroundColor: "#010822", color: "white" }
          : { backgroundColor: "#FFF6F6" }
      }
      data-bs-theme={`${props.mode}`} sticky="top">
        
      <Container fluid className='pt-2' style={{fontSize:"1.2rem"}} >
        <Navbar.Brand href="#home" style={{fontWeight:"700",fontSize:"2.2rem"}}>healthTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="More" disabled id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img src={props.mode === "dark" ? sun : moon} alt="sun" style={{height:"2rem",width:"2rem"}} onClick={props.toggleMode} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>
  )
}
