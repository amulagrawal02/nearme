import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    profile: "",
    password: "",
  });
  async function handler(e) {
    e.preventDefault();
    console.log(data.profile);
    const fd = new FormData();
    fd.append("profile", data.profile);
    fd.append("name", data.name);
    fd.append("email", data.email);
    fd.append("password", data.password);

    const res = await axios.post("http://localhost:8000/signup/data", fd);
  }
  return (
    <div id="main">
      <div>
        <img src={require("../../assets/signup.jpg")}></img>
      </div>
      <div id="form-dt">
        <form>
          <div id="nw">
            <label>Name</label>
            <input
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            ></input>
          </div>
          <div id="email">
            <label>Email</label>
            <input
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            ></input>
          </div>
          <div id="pwd">
            <label>Create Password</label>
            <input
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            ></input>
          </div>
          <div>
            <label>Profile</label>
            <input
              type="file"
              name="prf"
              onChange={(e) => {
                console.log(e.target.files);
                setData({ ...data, profile: e.target.files[0] });
              }}
            ></input>
          </div>
          <div>
            <label id="spl-txt">Already have account?</label>
            <button onClick={handler}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
