import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
function Login() {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data.email);
    console.log(data.password);
    const response = await (
      await axios.post("http://localhost:8000/login/data", data)
    ).data;
    console.log(response);
    if (response.token) {
      localStorage.setItem("token", response.token);
      window.location.href = "/";
    } else {
      alert("check your email and password");
    }
  }
  return (
    <div id="main">
      <div>
        <img src={require("../../assets/login.jpg")}></img>
      </div>
      <div id="form-dt">
        <form>
          <div id="email">
            <label>Email</label>
            <input
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            ></input>
          </div>
          <div id="pwd">
            <label>Password</label>
            <input
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label id="spl-txt">Don't have account?</label>
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
