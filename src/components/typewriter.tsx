import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="text-red-700 text-3xl font-semibold font-mono">
      <Typewriter
        options={{
          strings: [
            "Currently learning Next.js",
            "With tailwand css framework",
            "By using typescript language",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
