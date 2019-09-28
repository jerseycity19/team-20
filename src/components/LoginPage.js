import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="bigBox">
        <div className="leftBox">
          <img src="https://icon-library.net/images/log-in-icon/log-in-icon-2.jpg" />
        </div>
        <div className="rightBox">
          <h1 className="logIn"> LOGIN </h1>
          <input type="text" placeholder="Email" className="emailBox"/>
          <input type="password" placeholder="Password"/>
          <Link to={"/loggedin"} className="logButton">
            LOGIN
          </Link>
          <Link to={"/signup"} className="userButton">
            Not a User?
          </Link>
        </div>
      </div>
    </div>
    // <div className="wrapper">
    //   <NavBarComp />
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Body>
    //       <Form className="loginForm">
    //         <Form.Group controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" />
    //         </Form.Group>

    //         <Form.Group controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <div className="buttonStuff">
    //           <Button variant="primary" type="submit" href="/loggedin">
    //             Log In
    //           </Button>
    //         </div>
    //         <div className="buttonStuff">
    //           <Link to={"/signup"} className="signup">
    //             Not a User?
    //           </Link>
    //         </div>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>
  );
}

export default LoginPage;
