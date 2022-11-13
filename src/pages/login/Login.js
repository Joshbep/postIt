import React from 'react'
import "./login.css"

function Login () {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Sign In To POST IT</span>
        </div>
        <div className="loginRight">
          <div className="loginSection">
            <input placeHolder="Email" className="loginInput" />
            <input placeHolder="Password" className="loginInput" />
            <button className="loginButton">Log in</button>
            <span className="loginForgot"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
