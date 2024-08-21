import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 4100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  const Map = (isMobile, technologies) => {
    if (isMobile) {
      return technologies.slice(0, 6).map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <p className="flex justify-center text-trans font-thin">
            {technology.name}
          </p> */}
        </div>
      ));
    } else {
      return technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <p className="flex justify-center text-trans font-normal">
            {technology.name}
          </p> */}
        </div>
      ));
    }
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I learnt so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Some of my Tech Skills...
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {Map(isMobile, technologies)}
      </div>
      <div
        className={`absolute bottom-4 right-4 items-center hidden sm:flex fade-transition ${
          isVisible ? "visi" : "hid"
        }`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 flex justify-center items-center text-trans text-xl"
        >
          ⟳
        </motion.div>
        <span className="text-trans text-sm">Rotate Balls</span>
      </div>
    </>
  );
};
export default SectionWrapper(Tech, "");
