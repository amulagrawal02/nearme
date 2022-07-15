import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/LandingPage";
import Login from "./components/auth/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
