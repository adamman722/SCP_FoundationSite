import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import BackGround from "../Images/WhiteSCPLogo.png";
import NavBar from "../component/NavBar";
function MainPage() {
  const [startBackground, setStartBackground] = useState(false);

  const Image = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: Main-App-logo-spin infinite 20s linear;
    align-items: center;
    opacity: 50%;
    scrollbar-color: dark;
  `;
  const StartMainImage = styled.img`
    position: inherit;
    height: 500px;
    width: 500px;
    animation: Main-Start-Entry 3s linear;
    align-items: center;
    opacity: 50%;
    scrollbar-color: dark;
  `;
  setInterval(() => {
    setStartBackground(true);
  }, 3000);

  return <>{NavBar()}</>;
}

export default MainPage;

{
  /* <div className="App" style={{ color: "white" }}>
  <h1>You have made ittttt</h1>
  {startBackground ? (
    <Image src={BackGround} />
  ) : (
    <StartMainImage src={BackGround} />
  )}
</div> */
}
