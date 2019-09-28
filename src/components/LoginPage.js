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
  );
}

export default LoginPage;
