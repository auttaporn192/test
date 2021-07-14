import React from "react";

const Login = () => {
  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="login">Login :</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password :</label>
        <input type="password"></input>
      </div>
      <div className="btn-login">
          Login
      </div>
    </div>
  );
};

export default Login;
