import React from "react";
import "./SignupPage.css";
import NavBarComp from "./NavBarComp";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const Countries = [
  { label: "Afghanistan" },
  { label: "Argentina" },
  { label: "Australia" },
  { label: "Belgium" },
  { label: "Brazil" },
  { label: "Cambodia" },
  { label: "China" },
  { label: "Costa Rica" },
  { label: "Germany" },
  { label: "Guinea" },
  { label: "Hungary" },
  { label: "Iceland" },
  { label: "Japan" },
  { label: "Malaysia" },
  { label: "Turkey" },
  { label: "USA" }
];

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="signBigBox">
        <h1 className="signUp"> SIGN UP </h1>
        <label>
          Name:
          <input type="text" className="signupInput" />{" "}
        </label>
        <label>
          Email:
          <input type="text" className="signupInput" />{" "}
        </label>
        <label>
          Password:
          <input type="password" className="signupInput" />{" "}
        </label>
        <label>
          Country:
          <Select options={Countries} id="optionStuff" />
        </label>
        <Link to={"/login"} className="logButton">
          SIGN UP
        </Link>
      </div>
    </div>
  );
}
{
  /* <NavBarComp />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Form className="loginForm">
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="email" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <div className="buttonStuff">
              <Button variant="primary" type="submit" href="/login">
                Sign Up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card> */
}

export default LoginPage;
