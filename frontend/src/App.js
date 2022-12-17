import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage";
import Login from "./components/auth/Login";
import Profile from "./components/UserProfile";
import Signup from "./components/auth/Signup";
import ReqAuth from "./components/ReqAuth";
import { AuthProvider } from "./components/auth_context";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route index element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
