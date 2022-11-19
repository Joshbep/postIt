import { useContext, useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";

function Login () {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault()

    console.log(email.current.value)
  }

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
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              ref={password}
            />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
