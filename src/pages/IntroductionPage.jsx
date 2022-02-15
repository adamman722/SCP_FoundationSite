import React from "react";
import Typewriter from "typewriter-effect";

function IntroductionPage() {
  return (
    <div style={{ color: "#39FF14" }} className="App">
      <div className="typewriter1">
        <Typewriter
          className="nameeee"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .typeString("Hello Dr.■■■■■■")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .pauseFor(500)
              .typeString(".")
              .start()
              .pauseFor(7000)
              .deleteAll();
          }}
        />
      </div>
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(75)
              .pauseFor(3300)
              .typeString("...We have been waiting for you")
              .start()
              .pauseFor(2000)
              .deleteAll();
          }}
          className="typewriter2"
        />
      </div>
    </div>
  );
}

export default IntroductionPage;
