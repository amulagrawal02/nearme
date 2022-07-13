import React from "react";
import SearchBox from "./SearchBox";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div>
      <div id="navbar">
        <img src={require("../assets/main_logo.png")}></img>
        <div id="btn">
          <button>Login</button>
        </div>
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
      <div id="circle-2"></div>
    </div>
  );
}

export default LandingPage;
