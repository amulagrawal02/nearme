import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
function LandingPage() {
  const [logged, setLogged] = useState(false);
  async function checkLoggedIn() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.post("http://localhost:8000/login/getData", {
        token,
      });
      if (response) {
        setLogged(true);
      } else {
        console.log(
          "token is invaild while checking the token, Landing page,client"
        );
      }
    } else {
      return;
    }
  }
  useEffect(() => {
    checkLoggedIn();
    console.log(logged);
  }, [logged]);

  return (
    <div>
      <div id="navbar">
        <img src={require("../assets/main_logo.png")}></img>
        {logged == true ? (
          <div id="btn">
            <Link to={"/profile"}>
              <button>Dashboard</button>
            </Link>
          </div>
        ) : (
          <div id="btn">
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          </div>
        )}
      </div>
      <div id="others">
        <img src={require("../assets/img1.png")} id="searchImg"></img>
        <div id="main_text">
          <div id="heading">
            <h2>Everything near you is Useful.</h2>
            <h2>
              <span>FIND</span> your's
            </h2>
          </div>
          <div>
            <SearchBox></SearchBox>
          </div>
        </div>
      </div>
      <div id="circle-1"></div>
    </div>
  );
}

export default LandingPage;
