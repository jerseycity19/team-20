import React from "react";
import "./SignupPage.css";
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

export default LoginPage;
