import React from "react";
import "./Login.css";
function Login() {
  return (
    <div id="main">
      <div>
        <img src={require("../../assets/signup.jpg")}></img>
      </div>
      <div id="form-dt">
        <form>
          <div id="nw">
            <label>Name</label>
            <input></input>
          </div>
          <div id="email">
            <label>Email</label>
            <input></input>
          </div>
          <div id="pwd">
            <label>Create Password</label>
            <input></input>
          </div>
          <di>
            <label>Profile</label>
            <input></input>
          </di>
          <div>
            <label id="spl-txt">Already have account?</label>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
