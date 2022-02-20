import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import LoginButton from "./component/LoginButton";
import BackGround from "./Images/WhiteSCPLogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import IntroductionPage from "./pages/IntroductionPage";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/Intro" element={<IntroductionPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

/* TODO 
add catch all router page <= make it redirect to scp error page




*/
export default App;
