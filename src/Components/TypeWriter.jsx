import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to EstateWise",
      "Find Your Dream Home",
      "Explore Latest Listings",
      "Your Gateway to Real Estate!",
    ],
    loop: 0,
  });

  return (
    <div className="flex justify-center items-center mt-5">
      <h1 className="text-2xl font-bold">
        <span>{text}</span>
        <span className="text-blue-500"> |</span>
      </h1>
    </div>
  );
};

export default TypeWriter;
