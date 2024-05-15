import React, { useEffect, useState } from "react";
import bg from "../../assets/Bg-last.svg";

export const WhyUnihelp = () => {
  // Initialize state for the current sentence and its index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sentences = [
    "Streamlined Assignment Process for Teachers",
    "Promotion of Academic Integrity",
    "Plagiarism Checks Ensure Authenticity",
    "Confidence in Student Submissions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start transitioning
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setIsTransitioning(false); // End transitioning
      }, 1000); // Adjust duration as needed
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-black md:h-screen flex flex-col justify-center items-center p-[2rem] h-[16rem] gap-[4rem] md:gap-3 ">
      <h1 className="font-bold md:text-[4rem] text-[1.5rem] text-white ">
        Why UniHelp?
      </h1>
      <div className="flex flex-col items-center justify-center md:w-[90%] md:h-[70%] relative  w-full">
        <img src={bg} alt="" className="absolute z-0 md:w-[95%] w-full" />
        <div className="flex items-center justify-center z-10">
          {/* Use currentIndex to dynamically select the current sentence */}
          <div
            className={`transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h1 className="md:text-5xl text-[.9rem] text-black font-medium text-center">
              {sentences[currentIndex]}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
