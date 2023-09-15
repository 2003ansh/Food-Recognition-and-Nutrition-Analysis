import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sun from './sun.png';
import moon from './moon.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function Navs(props) {
  const handleLogout=(e)=>{
    props.logoutHandler();
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg"  style={
        props.mode === "dark"
          ? { backgroundColor: "#010822", color: "white" }
          : { backgroundColor: "#FFF6F6" }
      }
      data-bs-theme={`${props.mode}`} sticky="top">
        
      <Container fluid className='pt-2' style={{fontSize:"1.2rem"}} >
        <Navbar.Brand href="#home" style={{fontWeight:"700",fontSize:"2.1rem"}}><span style={{fontWeight:"700",color:"#ffc107",fontSize:"2.5rem"}}>ℏ</span>ealthTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link >
              <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
              Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={{textDecoration:"none",color:"inherit"}}>
              About
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to="/dailyeats" style={{textDecoration:"none",color:"inherit"}}>
              DailyEats
              </Link>
              </Nav.Link>
              
            
          </Nav>
          <Nav>
            <Nav.Link >
              {props.login ? ( <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>) : (  <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login/Sign Up </Link> )}
              </Nav.Link>
            <Nav.Link eventKey={2} >
              <img src={props.mode === "dark" ? sun : moon} alt="sun" style={{height:"2rem",width:"2rem"}} onClick={props.toggleMode} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </>
  )
}
