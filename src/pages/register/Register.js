import { useRef } from "react";
import {useNavigate, Link} from 'react-router-dom'
import axios from "axios";


function Register () {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
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
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Register To Use POST IT</span>
        </div>
        <div className="loginRight">
          <form className="loginSection" onSubmit={handleRegister}>
            <input
              type="text"
              ref={username}
              required
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="email"
              ref={email}
              required
              placeholder="Email"
              className="loginInput"
            />
            <input
              type="password"
              ref={password}
              required
              placeholder="Password"
              className="loginInput"
            />
            <button type="submit" className="loginButton">Sign Up</button>
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
