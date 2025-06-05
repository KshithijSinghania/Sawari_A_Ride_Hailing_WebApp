import React from "react";
import './index.css';
import { Route, Routes } from "react-router-dom";
import HomeAll from "./pages/HomeAll";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import HomeNext from "./pages/HomeNext";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App=() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeAll></HomeAll>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/home" element={<UserProtectedWrapper><HomeNext/></UserProtectedWrapper>} ></Route>
        <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}></Route>
        <Route path="/captain-home" element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}></Route>
        <Route path="/captain/captain-logout" element={<CaptainProtectedWrapper><CaptainLogout/></CaptainProtectedWrapper>}></Route>
      </Routes>
    </div>
  );
};

export default App;