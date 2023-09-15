import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img1 from './1.webp'
export default function About(props) {
  return (
    <>
    <Container fluid>
      <Row >
        
        <Col xs={12}
            sm={6}
            className='d-flex justify-content-center align-items-star pt-5'
            >
          <Card className='pt-5' style={{backgroundColor:"transparent",border:"none"}}>
            <Card.Title> <h1 className='text-center pt-3 fw-bold' style={{color:`${props.mode==="dark"?"White":"Black"}`}}>Mission statement</h1> </Card.Title>
            <Card.Body>
              <Card.Text style={{fontSize:"1.2rem",textAlign:"center",color:`${props.mode==="dark"?"grey":"grey"}`}}>
              At HealthTracker, we believe that healthy eating can transform <br />your life. Our goal is to make it easy for you to track your calorie <br /> intake and get a personalized diet plan that fits your unique needs. <br />We also offer healthanalytics to help you understand how your eating habits impact your  well-being. Our team is dedicated to helping you live your healthiest life possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}
            sm={6}  
            >
          <Card >
            <Card.Img variant="top" src={img1}   />
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
