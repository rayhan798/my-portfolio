import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../../assets/Profile_Pic1.jpg";
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
      className="w-full min-h-screen flex items-center relative bg-cover bg-center bg-[url('/src/assets/RAYHAN-VAI-7.jpg')] py-16 md:py-24 lg:py-0 overflow-hidden"
    >
      {/* Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-0">
        
        {/* Left Side (Text Content) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-center lg:text-left text-white relative z-50 pb-10 lg:pb-0"
        >
          <motion.p variants={textVariants} className="font-semibold mb-2 tracking-widest text-xs md:text-sm lg:text-base opacity-80 uppercase">
            HI, I'M A
          </motion.p>

          <motion.h1 variants={textVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={COLOR_GOLDEN_YELLOW_CLASS}>{typedText}</span>
            <span className={`${COLOR_GOLDEN_YELLOW_CLASS} animate-pulse ml-1`}>|</span>
          </motion.h1>

          <motion.p variants={textVariants} className="mb-8 text-gray-300 text-sm md:text-base lg:text-lg">
            Based in Chattogram, Bangladesh
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="text-[#F6c543] border border-[#F6c543]/50 rounded-full font-semibold py-3 px-8 transition duration-300 bg-[#F6c543]/10 hover:bg-[#F6c543] hover:text-black text-center backdrop-blur-sm text-sm md:text-base w-full sm:w-auto"
            >
              View My Works
            </motion.a>

            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative z-[200] text-[#F6c543] border border-[#F6c543]/50 rounded-full font-semibold py-3 px-8 transition duration-300 bg-[#F6c543]/10 hover:bg-[#F6c543] hover:text-black text-center backdrop-blur-sm text-sm md:text-base w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side (Responsive Modern UI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[360px] sm:min-h-[450px] md:min-h-[520px] lg:min-h-[600px]"
        >
          {/* Responsive container */}
          <div className="relative flex justify-center items-center w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] aspect-square">
            
            {/* Background Animated Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F6c543]/15 rounded-full blur-[60px] sm:blur-[90px] md:blur-[110px] animate-pulse"></div>
            
            {/* Tech Galaxy Layer */}
            <div className="absolute inset-0 z-0 scale-[0.9] sm:scale-105 md:scale-115 lg:scale-125 pointer-events-none opacity-80 flex items-center justify-center">
              <TechGalaxy />
            </div>

            {/* Profile Image Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex justify-center items-center"
            >
              {/* Main Image Wrapper */}
              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-[#F6c543] via-[#F6c543]/20 to-transparent shadow-[0_0_30px_rgba(246,197,67,0.2)]">
                <div className="rounded-full overflow-hidden border-[3px] sm:border-4 border-black/30 shadow-2xl">
                  {/* md:w-64 md:h-64 যোগ করা হয়েছে ট্যাবলেট সাইজের সঠিক অনুপাতের জন্য */}
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge 1: Experience (Bottom Left) */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-1 -left-4 sm:-bottom-4 sm:-left-6 md:-left-8 bg-black/90 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="bg-[#F6c543] w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-black text-xs sm:text-base">
                  1+
                </div>
                <div className="text-[9px] sm:text-xs text-white text-left leading-tight">
                  Year of <br /> <span className="font-bold">Experience</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Projects (Top Right) */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-1 -right-4 sm:-top-4 sm:-right-6 md:-right-8 bg-black/90 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3"
              >
                <div className="text-[9px] sm:text-xs text-right text-white leading-tight">
                  Success <br /> <span className="font-bold">Projects</span>
                </div>
                <div className="bg-[#F6c543] w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-black text-xs sm:text-base">
                  30+
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute inset-2 sm:inset-0 border-[1px] border-white/10 rounded-full animate-[spin_25s_linear_infinite] opacity-30"></div>
            <div className="absolute inset-6 sm:inset-4 border-[1px] border-[#F6c543]/20 rounded-full animate-[spin_18s_linear_infinite_reverse] opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;