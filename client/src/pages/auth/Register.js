import React, { useState } from "react";

import { auth } from "../../firebase";
import { toast } from "react-toastify";

import { MDBInput } from "mdb-react-ui-kit";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`,
    );

    //save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);

    //clear the state
    setEmail("");
  };

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
              className="form-control my-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />

            <button type="submit" className="btn btn-raised">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
