import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import logo from './logo.png'

const Login = () => {

  const navigate = useNavigate();
  return (
    <div className="loginouter">
      <div className="login">
        <div className="loginlogo">
          <div className="dlogo">
            {/* <img className="logoimage"  src={logo} alt="" /> */}
          </div>
          <div className="brand">
            <p>Dashboard Kit</p>
          </div>
        </div>
        <div className="loginheading">
          <p><span>Log In to Dashboard Kit</span> </p>
          <p>Enter you email and password below</p>
        </div>
        <div className="credentials">
          <div className="email">
            <p>EMAIL</p>
            <input type="email" placeholder="Email address" />
          </div>
          <div className="password">
            <div className="forget">
              <p>PASSWORD</p>
              <p><span>Forgot Password?</span></p>
            </div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="loginbutton">
          <button onClick={() => {navigate('/overview')}}>Log In</button>
        </div>
        <div className="create">
          <p><span>Don't have an account? </span>Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
