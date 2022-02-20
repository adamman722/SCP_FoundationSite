import React from "react";

function MainPage() {
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
    <div>
      <h1>You have made ittttt</h1>
    </div>
  );
}

export default MainPage;
