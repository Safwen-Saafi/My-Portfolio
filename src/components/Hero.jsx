import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-7 h-7 rounded-full bg-[#915EFF]" />
          <div className="flex flex-row gap-1 mt-[-1px]">
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
            {/* First line */}
            <div className="w-1 sm:h-80 h-40 violet-gradient mt-0" />
            {/* Second line */}
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Safwen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A CS student <span className="text-[#915EFF]">@</span> ENSI, interested in
            <div className="sm:block">
              <TypeAnimation
                sequence={[
                  "Web Technologies",
                  1000,
                  "Machine Learning",
                  1000,
                  "DevOps",
                  1000,
                ]}
                className="custom-text" // Apply the custom CSS class
                repeat={Infinity}
              />
            </div>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Conditionally render the Rotate PC arrow and text with smooth transition */}
      <div
        className={`absolute bottom-4 right-4 items-center hidden sm:flex fade-transition ${
          isVisible ? "visi" : "hid"
        }`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 flex justify-center items-center text-white text-4xl"
        >
          ⟳ {/* This is a rotating arrow symbol */}
        </motion.div>
        <span className="text-white ml-2 text-lg">Rotate PC</span>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
