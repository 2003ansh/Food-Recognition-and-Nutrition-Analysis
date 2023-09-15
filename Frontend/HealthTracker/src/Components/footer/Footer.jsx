import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function Footer() {
  return (
    <>
      <Navbar  className="bg-body-tertiary">
        <Container style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Navbar.Brand >
            
            <span style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>Copyright@2023 | All Rights Reserved | by GENESIS</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
