import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../../assets/IMG_20241123_103150-removebg-preview.png";
import useTyping from "../hooks/useTyping";
import TechGalaxy from "./TechGalaxy";
import {
  HERO_TEXTS,
  COLOR_GOLDEN_YELLOW_CLASS,
  containerVariants,
  textVariants,
  buttonVariants,
} from "../data/heroData";

const Hero = () => {
  const typedText = useTyping(HERO_TEXTS);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center relative bg-cover bg-center bg-[url('/src/assets/RAYHAN-VAI-7.jpg')] py-12 lg:py-0 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-10 lg:gap-0">
        {/* Left Side (Text Content) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-center lg:text-left text-white relative z-50 pb-10 lg:pb-0"
        >
          <motion.p
            variants={textVariants}
            className="font-semibold mb-2 tracking-widest text-sm md:text-base"
          >
            HI, I'M A
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className={COLOR_GOLDEN_YELLOW_CLASS}>{typedText}</span>
            <span className={`${COLOR_GOLDEN_YELLOW_CLASS} animate-pulse ml-1`}>
              |
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mb-8 text-gray-300 text-base md:text-lg"
          >
            Based in Chattogram, Bangladesh
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="text-[#F6c543] border border-[#F6c543] rounded-full font-semibold py-3 px-8 transition duration-300 bg-black/40 hover:bg-[#F6c543] hover:text-black text-center"
            >
              View My Works
            </motion.a>

            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative z-[200] text-[#F6c543] border border-[#F6c543] rounded-full font-semibold py-3 px-8 transition duration-300 bg-black/40 hover:bg-[#F6c543] hover:text-black text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side (Image & Galaxy Animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[300px] md:min-h-[450px] lg:min-h-[600px]"
        >
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center z-0 scale-75 md:scale-100">
              <TechGalaxy />
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 p-1 bg-gradient-to-b from-golden-yellow/20 to-transparent rounded-full shadow-2xl"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-45 h-45 md:w-60 md:h-60 lg:w-60 lg:h-60 object-cover rounded-full  border-golden-yellow/30"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
