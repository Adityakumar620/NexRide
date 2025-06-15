import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptionLogin from "./pages/CaptionLogin";
import CaptionSignup from "./pages/CaptionSignup";
import Home from "./pages/Home";
import "./App.css";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptionHome from "./pages/CaptionHome";
import CaptionProtectWrapper from "./pages/CaptionProtectWraper";
import CaptionLogout from "./pages/CaptionLogout";
import Riding from "./pages/Riding";
import CaptionRiding from "./pages/CaptionRiding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/caption-login" element={<CaptionLogin />} />
        <Route path="/caption-signup" element={<CaptionSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/caption-riding" element={<CaptionRiding />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/caption-home"
          element={
            <CaptionProtectWrapper>
              <CaptionHome />
            </CaptionProtectWrapper>
          }
        />

        <Route
          path="/caption/logout"
          element={
            <CaptionProtectWrapper>
              <CaptionLogout />
            </CaptionProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
