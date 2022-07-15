import React from "react";
import "./Login.css";
function Login() {
  return (
    <div id="main">
      <div>
        <img src={require("../../assets/login.jpg")}></img>
      </div>
      <div id="form-dt">
        <form>
          <div id="email">
            <label>Email</label>
            <input></input>
          </div>
          <div id="pwd">
            <label>Password</label>
            <input></input>
          </div>
          <div>
            <label id="spl-txt">Don't have account?</label>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
