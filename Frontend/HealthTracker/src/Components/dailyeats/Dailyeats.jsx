import React, { useState, useEffect } from 'react';
import { Button, Col, Container,Row,Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Dailyeats(props) {
  const [response, setResponse] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const url = 'http://146.190.10.219:5000/api/dailyeat/fetchallfood';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': props.token,
    },
  };

  const fetchData = () => {
    setSpinner(true); // Show the spinner when data is being fetched
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Response data:', data);
        if (data.error) {
          alert(data.error);
        } else {
          setResponse(data);
          setSpinner(false); // Hide the spinner when data is received
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (props.login) {
      fetchData();
    }
  }, [props.login]); // Fetch data when the "login" prop changes

  return (
    <>
      <Container fluid>
        <Card >
          <Card.Body className='py-2'>{props.login ? 'For ' : 'byy'}</Card.Body>
        </Card>
        <br />
        {props.login ? (
          <>
            <Row>
            {spinner ? (
              <Spinner animation="border" size="sm" role="status" className='p-5'>
                <span className="sr-only" style={props.mode==="dark"?{color:"white",fontSize:"1.2rem"}:{color:"black",fontSize:"1.2rem"}}>Loading...</span>
              </Spinner>
            ) : (
              response.map((foodItem, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card  style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={foodItem.Photo} />
                  <Card.Body>
                    <Card.Text>Food Name:{foodItem.Foodname}</Card.Text>
                    <Card.Text>Food Calorie:{foodItem.Calorie}</Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              ))
            )
            }</Row>
          </>
        ) : (
          <Button
            variant="warning"
            style={{ margin: '10px', marginLeft: '0px', color: 'white' }}
          >
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">
              Login
            </Link>
          </Button>
        )}
      </Container>
    </>
  );
}
