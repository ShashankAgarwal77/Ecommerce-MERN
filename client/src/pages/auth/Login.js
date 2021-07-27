import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

import { MDBInput } from "mdb-react-ui-kit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(email, password);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
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

            <MDBInput
              label="Enter Password"
              type="password"
              id="typePassword"
              className="form-control my-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={handleSubmit}
              type="primary"
              className="mb-3"
              block
              shape="round"
              icon={<MailOutlined />}
              size="large"
              disabled={!email || password.length < 6}
            >
              Login with Email/Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
