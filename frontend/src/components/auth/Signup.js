import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [ig, setig] = useState("");
  async function handler(e) {
    e.preventDefault();
    console.log("clicked");
    // const reader = new FileReader();
    // reader.readAsDataURL(ig);
    // reader.onload = () => {
    //   setData({ ...data, profile: reader.result });
    // };
    const res = await axios.post("http://localhost:8000/signup/data", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
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
            <label id="spl-txt">Already have account?</label>
            <button onClick={handler}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
