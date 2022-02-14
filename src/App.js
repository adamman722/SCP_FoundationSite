import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import LoginButton from "./component/LoginButton";
import BackGround from "./Images/WhiteSCPLogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isClicked = useSelector((state) => state.button.value);

  const Image = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: App-logo-spin infinite 20s linear;
    align-items: center;
  `;
  const ClickedImage = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: Start-Entry 6s linear;
    align-items: center;
  `;

  return (
    <div className="App">
      {isClicked ? (
        <ClickedImage src={BackGround} alt="" />
      ) : (
        <Image src={BackGround} alt="" />
      )}

      <h1>Hello loser</h1>
      <LoginButton />
    </div>
  );
}

export default App;
