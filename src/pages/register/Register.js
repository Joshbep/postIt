import { useContext, useState, useEffect, useRef } from "react";
import {useNavigate, Navigate, Link} from 'react-router-dom'
import "./register.css"
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const REGISTER_URL = '/register';

function Register () {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/users/register", user);
        navigate("/signin");
      } catch (err) {
        console.log(err);
      }
    }
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Register To Use POST IT</span>
        </div>
        <div className="loginRight">
          <form className="loginSection" onSubmit={handleClick}>
            <input
              type="text"
              name="username"
              autoComplete="off"
              ref={username}
              required
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="email"
              name="email"
              ref={email}
              required
              placeholder="Email"
              className="loginInput"
            />
            <input
              type="password"
              name="password"
              autoComplete="off"
              ref={password}
              required
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              name="password"
              autoComplete="off"
              ref={passwordAgain}
              required
              placeholder="Type In Your Password Again"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Go to Log In</span>
            <Link to="/signin">
              <button className="loginRegisterButton">Log In</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
