import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="text-red-700 text-3xl text-center font-semibold font-mono">
      <Typewriter
        options={{
          strings: [
            "I Build Web Apps using Next.js",
            "For Web Designs I Use Figma",
            "Currently Learning Agentic AI",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
