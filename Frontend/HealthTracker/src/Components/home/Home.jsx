import React, { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Camera from "./Camera";
import Upload from "./Upload";
import { Button, Form } from "react-bootstrap";
import "./Home.css";
import Swiper from "./Swiper";
import cal from "./calories.png";
import diet from "./diet.png";
import nut from "./nutrition.png";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const form = () => {
    setShow1(!show1);
  };
  const nutrition = () => {
    alert("Nutrition Analysis");
  };

  const opencamera = () => {
    setShow(!show);
  };
const upload=()=>{
  setShow2(!show2);
}
  return (
    <>
      <Container
        fluid
        className="homeContainer px-0 d-flex justify-content-center align-items-center"
      >
        <Container
          fluid
          className="px-0 d-flex justify-content-center align-items-center"
          id="box1"
        >
          <Card
            id="homecard"
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Body style={{ textAlign: "center" }}>
              <h1 id="const">Your One Stop Solution for</h1>
              <span id="typing">
                <TypeAnimation
                  sequence={[
                    "Calorie Tracker",
                    2000,
                    " Personalised Diet Plan",
                    2000,

                    "Nutrition Analysis",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </Card.Body>
          </Card>
        </Container>
        <Swiper></Swiper>
      </Container>
      <Container fluid className="px-0">
        <Row id="homerow" className="py-5 mx-0 ">
          <Col
            sm={4}
            xs={12}
            id="homecol"
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              id="colcard"
              border="warning"
              style={
                props.mode === "dark"
                  ? {
                      color: "white",
                      boxShadow:
                        "rgba(255, 255, 255, 0.4) 0px 5px 20px, " +
                        "rgba(255, 255, 255, 0.3) 30px 7px 130px -1px, " +
                        "rgba(255, 255, 255, 0.2) 0px -3px 0px inset",
                      backgroundColor: "black",
                    }
                  : {
                      color: "black",
                      boxShadow:
                        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, " +
                        "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
                        "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, " +
                        "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
                        "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
                        "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
                        "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
                        "rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      backgroundColor: "white",
                    }
              }
            >
              <Card.Img
                variant="top"
                src={cal}
                className="colimg"
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />
              <Card.Body
                className="d-flex flex-column align-items-center"
                style={{ rowGap: "5px" }}
              >
                <Card.Title id="card" className="fw-bold">
                  Calorie Tracker
                </Card.Title>
                <Card.Body style={{display:"flex",columnGap:"20px"}}>
                <Button
                  size="sm"
                  className="btn btn-warning "
                  id="homebutton"
                  onClick={opencamera}
                >
                  {show ? "Close Camera" : "Open Camera"}
                </Button>
                <Button
                  size="sm"
                  className="btn btn-warning "
                  id="homebutton"
                  onClick={upload}
                >
                  {show2 ? "Close Upload":"Upload"}
                </Button>
                </Card.Body>
                
                <Card.Text id="card" className="fw-light">
                  <span className="font-sans-serif">
                  Our Calorie Tracker feature makes it easy to manage your daily calorie intake and make healthier choices.
                  </span>
                </Card.Text>
              </Card.Body>

              {show && <Camera mode={props.mode} show={show} handleimage={props.handleimage} setDetails={props.setDetails} token={props.token} />}
              {show2 && <Upload mode={props.mode} show={show} handleimage={props.handleimage} setDetails={props.setDetails} token={props.token} />}
            </Card>
          </Col>
          <Col
            xs={12}
            sm={4}
            id="homecol"
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              id="colcard"
              border="info"
              style={
                props.mode === "dark"
                  ? {
                      color: "white",
                      boxShadow:
                        "rgba(255, 255, 255, 0.4) 0px 5px 20px, " +
                        "rgba(255, 255, 255, 0.3) 30px 7px 130px -1px, " +
                        "rgba(255, 255, 255, 0.2) 0px -3px 0px inset",
                      backgroundColor: "black",
                    }
                  : {
                      color: "black",
                      boxShadow:
                        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, " +
                        "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
                        "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, " +
                        "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
                        "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
                        "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
                        "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
                        "rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      backgroundColor: "white",
                    }
              }
            >
              <Card.Img
                variant="top"
                src={diet}
                className="colimg"
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />
              <Card.Body
                className="d-flex flex-column align-items-center"
                style={{ rowGap: "5px" }}
              >
                <Card.Title id="card" className="fw-bold">
                  Personialised Diet Chart
                </Card.Title>
                <Button
                  size="sm"
                  className="btn btn-info"
                  id="homebutton"
                  onClick={form}
                >
                  <Link
                    to="/dietchart"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Get Diet Chart
                  </Link>
                </Button>
                <Card.Text id="card">
                  <span className="font-sans-serif">
                    {" "}
                     Get ready to experience a diet plan designed just for you, making wellness simpler and more effective.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={4}
            id="homecol"
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              id="colcard"
              border="success"
              style={
                props.mode === "dark"
                  ? {
                      color: "white",
                      boxShadow:
                        "rgba(255, 255, 255, 0.4) 0px 5px 20px, " +
                        "rgba(255, 255, 255, 0.3) 30px 7px 130px -1px, " +
                        "rgba(255, 255, 255, 0.2) 0px -3px 0px inset",
                      backgroundColor: "black",
                    }
                  : {
                      color: "black",
                      boxShadow:
                        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, " +
                        "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
                        "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, " +
                        "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
                        "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
                        "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
                        "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
                        "rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      backgroundColor: "white",
                    }
              }
            >
              <Card.Img
                variant="top"
                src={nut}
                className="colimg"
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />
              <Card.Body
                className="d-flex flex-column align-items-center"
                style={{ rowGap: "5px" }}
              >
                <Card.Title id="card" className="fw-bold">
                  Nutrition Analysis
                </Card.Title>
                <Button
                  size="sm"
                  className="btn btn-success"
                  id="homebutton"
                  onClick={nutrition}
                >
                  Analyse
                </Button>

                <Card.Text id="card">
                  <span className="font-sans-serif">
                    {" "}
                     Our Nutrition Analysis feature will help you to track your daily nutrition intake and make healthier choices.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
