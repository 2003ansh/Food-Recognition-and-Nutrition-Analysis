import React, { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Camera from "./Camera";
import { Button } from "react-bootstrap";
import "./Home.css";
import Swiper from "./Swiper";
import cal from "./calories.png";
import diet from "./diet.png";
import nut from "./nutrition.png";

export default function Home() {
  const [show, setShow] = React.useState(false);

  const opencamera = () => {
    setShow(true);
  };

  return (
    <>
      <Container fluid className="homeContainer px-0">
        <Container fluid className="px-0" id="box1">
          <Card id="homecard">
            <Card.Body style={{ textAlign: "center" }}>
              <h1 id="const">Your One Stop Solution for</h1>
              <span id="typing">
                <TypeAnimation
                  sequence={[
                    "Calorie Tracker !",
                    2000,
                    " Personalised Diet Plan !",
                    2000,

                    "Nutrition Analysis !",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </Card.Body>
          </Card>
          <Row id="homerow">
            <Col sm={4} xs={12} id="homecol">
              <Card id="colcard" border="warning" >
                <Card.Img
                  variant="top"
                  src={cal}
                  className="colimg"
                  style={{
                    height: "70px",
                    width: "70px",
                  }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title id="card">Calorie Tracker</Card.Title>
                  <Button
                size="sm"
                className="btn btn-warning"
                id="homebutton"
                onClick={opencamera}
              >
                Open Camera
              </Button>
              {show && <Camera />}
                  <Card.Text id="card">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={4} id="homecol">
              <Card id="colcard" border="info" >
                <Card.Img
                  variant="top"
                  src={diet}
                  className="colimg"
                  style={{
                    height: "70px",
                    width: "70px",
                  }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title id="card">Personialised Diet Chart</Card.Title>
                  <Button
                size="sm"
                className="btn btn-info"
                id="homebutton"
                onClick={opencamera}
              >
                Open Camera
              </Button>
              {show && <Camera />}
                  <Card.Text id="card">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={4} id="homecol">
              <Card id="colcard" border="success" >
                <Card.Img
                  variant="top"
                  src={nut}
                  className="colimg"
                  style={{
                    height: "70px",
                    width: "70px",
                  }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title id="card">Nutrition Analysis</Card.Title>
                  <Button
                size="sm"
                className="btn btn-success"
                id="homebutton"
                onClick={opencamera}
              >
                Open Camera
              </Button>
              
                  <Card.Text id="card">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                {show && <Camera />}
              </Card>
            </Col>
          </Row>
        </Container>
        <Swiper></Swiper>
      </Container>
    </>
  );
}
