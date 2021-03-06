import { useState } from "react";
import styled from "styled-components";
import "../App.css";
import LoginButton from "../component/LoginButton";
import BackGround from "../Images/WhiteSCPLogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

import IntroPage from "./IntroductionPage";
function StartPage() {
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
  const AfterEffectButton = styled.button`
    width: 500px;
    height: 86px;
    line-height: 88px;
    font-size: 25px;
    font-family: "Bebas Neue", sans-serif;
    background-color: black;
    border: 0;
    color: rgb(0, 0, 0);
    letter-spacing: 3px;
    cursor: pointer;
    outline: transparent;
    position: initial;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    animation: 0.85s closeGraident;
  `;

  let navigate = useNavigate();

  return (
    <div className="App">
      {isClicked ? (
        <ClickedImage src={BackGround} alt="" />
      ) : (
        <Image src={BackGround} alt="" />
      )}

      <h1>Hello loser</h1>
      {isClicked ? (
        <AfterEffectButton>Proceed to Foundation Archives</AfterEffectButton>
      ) : (
        <LoginButton />
      )}
      {isClicked
        ? setTimeout(() => {
            navigate("/Intro");
          }, 4500)
        : null}
    </div>
  );
}

export default StartPage;
