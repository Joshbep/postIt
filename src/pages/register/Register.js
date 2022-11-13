import React from 'react'
import "./register.css"

function Register () {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginApp">POST IT</h3>
          <span className="LoginDescription">Register To Use POST IT</span>
        </div>
        <div className="loginRight">
          <div className="loginSection">
            <input placeHolder="Username" className="loginInput" />
            <input placeHolder="Email" className="loginInput" />
            <input placeHolder="Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
