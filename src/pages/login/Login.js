import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

let baseUrl = 'http://localhost:3001'

function Login () {
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:3001/users/signin'
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value,
    }
    try {

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      console.log(response)
      console.log("BODY: ",response.body)

      if (response.status === 200) {
        navigate("/")
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Sign In To POST IT</span>
        </div>
        <div className="loginRight">
          <form className="loginSection" onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className="loginInput"
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              name="password"
              className="loginInput"
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
