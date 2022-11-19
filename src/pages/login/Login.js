import { useContext, useRef } from "react";
import "./login.css"

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
              placeHolder="Email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeHolder="Password"
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
