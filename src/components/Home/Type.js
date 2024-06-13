import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    
    <Typewriter
      options={{
        strings: [
          // "Software Developer",
          "Front-end Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  );
}

export default Type;
