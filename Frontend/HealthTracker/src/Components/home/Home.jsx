import React from "react";
import img1 from "./1.png";
import img2 from "./2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
export default function Home() {
  return (
    <Container fluid style={{ overflow: "hidden" }}>
      <Row>
        <Col xs={12} sm={6}>
          <Image src={img2} fluid />;
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem", fontWeight: "400" }}>
                Card Title
              </Card.Title>
              <Card.Subtitle className="mb-2" style={{ fontSize: "3rem" }}>
                Health Tracker
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                necessitatibus sit impedit numquam cumque maxime, facere minus
                quisquam labore? Veniam dolore sunt accusantium omnis quam quasi
                repudiandae nemo praesentium provident. Tenetur sit illo ipsam
                ipsa odit alias quibusdam ab fugiat aspernatur maiores
                architecto quod cum eius quos quasi amet, laborum reiciendis
                nulla aut mollitia dolore perferendis praesentium aperiam
                corrupti? Facilis?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
