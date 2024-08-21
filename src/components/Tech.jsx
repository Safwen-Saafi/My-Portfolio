import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loadedTechnologies, setLoadedTechnologies] = useState([]);

  useEffect(() => {
    let currentIndex = 0;

    const loadTechnologies = () => {
      if (currentIndex < technologies.length) {
        setLoadedTechnologies((prev) => [
          ...prev,
          technologies[currentIndex],
        ]);
        currentIndex++;
        // Use requestIdleCallback if available, otherwise fallback to setTimeout
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadTechnologies);
        } else {
          setTimeout(loadTechnologies, 200); // Adjust the timeout as needed
        }
      }
    };

    loadTechnologies();
  }, []);

  return (
    <>
      <h1 className="font-bold flex justify-center text-lg mb-5 text-[#915EFF]">
        My Tech Stack
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {loadedTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="flex justify-center text-white font-bold">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
