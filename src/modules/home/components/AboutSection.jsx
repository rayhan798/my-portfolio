import React from "react";
import { motion } from "framer-motion";
import { 
  fadeInVariant, 
  staggerContainerVariant, 
  ABOUT_STATS, 
  BIO_DATA 
} from "../data/aboutData"; 

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#F6c543]/10 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="text-center mb-20"
        >
          <span className="inline-block border border-[#F6c543] text-[#F6c543] px-5 py-1.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4">
            Discovery
          </span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
            Developing the <span className="text-[#F6c543]">Future</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#F6c543] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
              Developing the Future
            </h3>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am <span className="text-white font-semibold">Md. Rayhan</span>, a creative mind blending aesthetics with functional code. With <span className="text-[#F6c543] font-bold">02 years</span> of experience in the digital realm, I don't just build websites; I create digital journeys.
            </p>
          </motion.div>

          {/* Right Side: Experience Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border-2 border-dashed border-[#F6c543]/30 rounded-full"
              />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 border border-white/10 rounded-[40px] flex flex-col justify-center items-center ">
                <span className="text-8xl md:text-9xl font-black text-[#F6c543]">
                  02
                </span>
                <div className="text-center">
                   <p className="text-[#F6c543] font-bold tracking-widest uppercase text-xs">Years of</p>
                   <p className="text-white font-light text-lg uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainerVariant}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-24 pt-16 border-t border-white/5"
        >
          {ABOUT_STATS.map((item, idx) => (
            <motion.div key={idx} variants={fadeInVariant} className="group cursor-default text-center lg:text-left">
              <p className="text-[#F6c543] font-black text-[10px] tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                {item.label}
              </p>
              <p className="text-lg md:text-xl font-medium text-white/90 truncate">
                {item.val}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;