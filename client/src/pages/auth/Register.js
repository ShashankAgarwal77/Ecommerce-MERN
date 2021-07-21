import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    //
  };

  const registerForm = () => {};

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Enter Email Address"
              type="email"
              id="typeEmail"
              // className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autofocus
            />

            <button type="submit" className="btn btn-raised">
              Register / {email}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
