import React, { useState, useEffect } from "react";
import "./dietchart.css";
import diet from "./diet.png";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Dietchart(props) {
  const [user, setUser] = useState(false);
  const [dietchart, setDietchart] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedClass, setselectedClass] = useState("");
  const [selectedCalorie, setselectedCalorie] = useState("");
  const url1 = "http://146.190.10.219:5000/api/chart/addchart";
  const countries = ["Low_Calorie", "Moderate_Calorie", "High_Calorie","Ultra_High_Calorie"];
  const statesByCountry = {
    Low_Calorie: ["1200", "1400", "1600"],
    Moderate_Calorie: ["1800", "2000", "2200"],
    High_Calorie: ["2500", "2700", "3000"],
    Ultra_High_Calorie: ["3200", "3500", "4000"],
  };

  // Handle the change event for the country dropdown
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setselectedClass(country);
    setselectedCalorie(""); // Clear the selected state when the country changes
  };

  // Handle the change event for the state dropdown
  const handleStateChange = (event) => {
    const state = event.target.value;
    a
    setselectedCalorie(state);
    setLoader(false);
  };
  const submit = () => {
    console.log(selectedClass);
    console.log(selectedCalorie);
  };
  let a;
  const requestBody = {
    Calories: selectedClass,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  const chart = () => {
    if (props.login) {
      setUser(true);
      fetch(url1, options)
        .then((response) => response.json())
        .then((data) => {
          console.log("Response data:", data);
          if (data.error) {
            alert(data.error);
          } else {
            setDietchart(data); // Update the dietchart state with the fetched data
            setLoader(true);
          }
          alert("Your diet chart is ready");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please login first");
    }
  };
  
  return (
    <>
      <article>
        <section className="card">
          <div className="text-content">
            <h3
              style={
                props.mode === "dark"
                  ? { color: "white", fontWeight: "700" }
                  : { color: "black", fontWeight: "700" }
              }
            >
              "Eat Right, Feel Great: Your Diet Chart Companion"
            </h3>
            <p
              style={
                props.mode === "dark"
                  ? { color: "whitesmoke" }
                  : { color: "#000000" }
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {props.login ? (
              <Row>
                <Col xs={12} sm={4}>
                  <label htmlFor="countrySelect"  style={
                props.mode === "dark"
                  ? { color: "whitesmoke" }
                  : { color: "#000000" }
              }>Select Class Calorie :</label>
                  <select
                    id="countrySelect"
                    onChange={handleCountryChange}
                    value={selectedClass}
                  >
                    <option value="">Select a Class</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col xs={12} sm={4}>
                  <label htmlFor="stateSelect"  style={
                props.mode === "dark"
                  ? { color: "whitesmoke" }
                  : { color: "#000000" }
              }>Select a Range:</label>
                  <select
                    id="stateSelect"
                    onChange={handleStateChange}
                    value={selectedCalorie}
                  >
                    <option value="" >Select a Range</option>
                    {statesByCountry[selectedClass] &&
                      statesByCountry[selectedClass].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                  </select>
                </Col>
                <Col xs={12} sm={4} style={{display:"flex"}}>
                  <Button
                    variant="warning"
                    style={{ margin: "0px", marginLeft: "0px", color: "black" }}
                    onClick={chart}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            ) : (
              <Button
                variant="warning"
                style={{ margin: "10px", marginLeft: "0px", color: "inherit" }}
              >
                <Link to="/login">Login </Link>
              </Button>
            )}
          </div>
          <div className="visual">
            <img src={diet} alt="loading" />
          </div>
        </section>
      </article>
      <Container fluid className="px-4">
        {loader&&props.login ? (
          <Table
            responsive="sm"
            striped
            bordered
            hover
            variant={props.mode === "dark" ? "dark" : "light"}
            
          >
            <thead>
              <tr>
                <th style={props.mode==="dark"?{}:{}}>Days</th>
                <th style={{ color: "#fbbc04" }}>Breakfast <br />Time:8am </th>
                <th style={{ color: "#fbbc04" }}>Lunch <br />Time:1pm</th>
                <th style={{ color: "#fbbc04" }}>Snacks <br />Time:5:30pm</th>
                <th style={{ color: "#fbbc04" }}>Dinner <br />Time:8:30pm</th>
              </tr>
            </thead>
            <tbody>
              {dietchart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td style={{ color: "#005A34",fontWeight:"700" }}>{item.Days}</td>
                    <td style={{ color: "#00C6CF",fontWeight:"700"  }}>{item.Breakfast}</td>
                    <td style={{ color: "#068488" ,fontWeight:"700" }}>{item.Lunch}</td>
                    <td style={{ color: "#2581c4" ,fontWeight:"700" }}>{item.Snacks}</td>
                    <td style={{ color: "#5aaf70",fontWeight:"700"  }}>{item.Dinner}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          null
        )}
      </Container>
    </>
  );
}
