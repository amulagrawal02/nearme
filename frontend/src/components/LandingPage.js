import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth_context";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const auth = useAuth();
  return (
    <div>
      <div id="navbar">
        <img src={require("../assets/main_logo.png")}></img>

        <div id="btn">
          {auth.user && (
            <Link to={"/profile"}>
              <button>Profile</button>
            </Link>
          )}
          {!auth.user && (
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          )}
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
    </div>
  );
}

export default LandingPage;
