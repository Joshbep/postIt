import { useContext, useState, useEffect } from "react";
import {useNavigate, Navigate, Link} from 'react-router-dom'
import "./register.css"
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const REGISTER_URL = '/register';

function Register () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();


  const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const url = 'http://localhost:3001/users/register'
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response)
        if (response.status === 200) {
          console.log("worked register")
          navigate("/signin")
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
          <span className="LoginDescription">Register To Use POST IT</span>
        </div>
        <div className="loginRight">
          <form className="loginSection" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              onChange={handleChangeUsername}
              required
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChangeEmail}
              required
              placeholder="Email"
              className="loginInput"
            />
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              onChange={handleChangePassword}
              required
              placeholder="Password"
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
