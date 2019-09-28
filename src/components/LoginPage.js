import React from "react";
import NavBarComp from "./NavBarComp";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="wrapper">
    <div className="form-wrapper">
        <h1>Login</h1>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                />
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                />
            </div>
            <div className="createAccount">
                <button type="submit">Login</button>
                <small>Dont Have an Account?</small>
            </div>
    </div>
</div>
  );
}

export default LoginPage;
