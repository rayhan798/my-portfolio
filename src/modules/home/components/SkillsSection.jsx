import React from "react";
import { motion } from "framer-motion";
import logoImg from "../../../assets/raihan-vai-logo-1.png"; 
import { SKILLS_DATA, fadeInVariant, itemVariant } from "../data/skillsData";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden min-h-[600px] flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] bg-[#F6c543]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Identity Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#F6c543] rounded-[2.5rem] blur-2xl opacity-10" />
            <div className="relative w-56 h-56 md:w-64 md:h-64 bg-[#1a1a1a] border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-2xl">
              <img src={logoImg} alt="Raihan Logo" className="w-24 h-24 object-contain mb-4" />
              <span className="text-gray-500 text-[10px] tracking-widest uppercase font-mono">Raihan</span>
            </div>
          </motion.div>

          {/* Right Side: Content & Skills */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-gray-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
                Technical Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-[1.1] tracking-tight">
                Frontend 
                <span className="text-[#F6c543] drop-shadow-[0_0_15px_rgba(246,197,67,0.5)]"> Architect</span> 
                <br />
                <span className="text-white">Future</span>
              </h2>
            </motion.div>

            {/* Render Skills from External Data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
              {SKILLS_DATA.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariant(index)}
                  className="flex flex-col gap-2 group"
                >
                  <div className="flex justify-between items-end">
                    <h3 className="text-sm font-bold uppercase tracking-wider group-hover:text-[#F6c543] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-[#F6c543] text-[10px] font-mono">{skill.level}</span>
                  </div>
                  
                  <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-[#F6c543] shadow-[0_0_8px_rgba(246,197,67,0.8)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;