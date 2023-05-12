import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import "./login.css"
import { CircularProgress } from "@material-ui/core";
import axios from "axios";


//login
function Login () {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = (e) => {
      e.preventDefault();
      loginCall(
        { username: username.current.value, password: password.current.value },
        dispatch
      );
      navigate('/')
    };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Sign In To POST IT</span>
        </div>
        <div className="loginRight">
          <form className="loginSection" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className="loginInput"
              ref={username}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
              <button className="loginRegisterButton">Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
