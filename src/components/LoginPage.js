import React from "react";
import NavBarComp from "./NavBarComp";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="wrapper">
      <NavBarComp />
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Form className="loginForm">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="buttonStuff">
              <Button variant="primary" type="submit" href="/loggedin">
                Log In
              </Button>
            </div>
            <div className="buttonStuff">
              <Link to={"/signup"} className="signup">
                Not a User?
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginPage;
