import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loadedTechnologies, setLoadedTechnologies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Function to load technologies one by one
    const loadNextTechnology = () => {
      if (index < technologies.length) {
        setLoadedTechnologies((prev) => [...prev, technologies[index]]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    // Load the next technology every 500ms
    const interval = setInterval(loadNextTechnology, 500);

    // Clear the interval when all technologies are loaded
    if (index >= technologies.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <h1 className='font-bold flex justify-center text-lg mb-5 text-[#915EFF]'>My Tech Stack</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {loadedTechnologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="flex justify-center text-white font-bold">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
