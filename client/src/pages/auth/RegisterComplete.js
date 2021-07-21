import React, { useState, useEffect } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { MDBInput } from "mdb-react-ui-kit";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>

          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Confirm Email Address"
              type="email"
              id="typeEmail"
              className="form-control my-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />

            <MDBInput
              label="Enter Your Password"
              id="typePassword"
              className="form-control my-4"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoFocus
            />

            <button type="submit" className="btn btn-raised">
              Complete Registeration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
