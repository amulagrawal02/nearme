import React from "react";
import axios from "axios";
import { useAuth } from "./auth_context";
import { Link, useNavigate } from "react-router-dom";

function UserProfile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = () => {
    auth.logout();
    navigate("/login");
  };
  console.log(auth.user);
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleSubmit}>Logout</button>
      <Link to={"/create"}>
        <button>Create Post</button>
      </Link>
    </div>
  );
}

export default UserProfile;
