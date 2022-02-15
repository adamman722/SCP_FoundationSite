import React from "react";
import Typewriter from "typewriter-effect";

function IntroductionPage() {
  return (
    <div style={{ color: "white" }} className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hello Dr.■■■■■■").start();
        }}
      />
    </div>
  );
}

export default IntroductionPage;
