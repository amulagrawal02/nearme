import React from "react";
import axios from "axios";
import { useAuth } from "./auth_context";

function UserProfile() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div>
      <h1>Welcome{auth.user}</h1>
    </div>
  );
}

export default UserProfile;
