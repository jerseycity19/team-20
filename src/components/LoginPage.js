import React from "react";
import NavBarComp from "./NavBarComp"
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./LoginPage.css";


function LoginPage() {
  return (
    
    <div className="centered">
  
        <NavBarComp />
    <Card style={{ width: '18rem' }}>
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
        <Button variant="primary" type="submit" href="/loggedin">
          Log In
        </Button>
      </Form>
  </Card.Body>
</Card>
     
    </div>
  );
}

export default LoginPage;
