import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data/resumeData";

const ResumeCard = ({ data, isLeft, index }) => {
  return (
    <div className={`relative flex flex-col lg:flex-row items-center justify-between w-full group mb-10 lg:mb-24 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* --- Card Content --- */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
        className={`w-full lg:w-[45%] pl-10 md:pl-14 lg:pl-0 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}
      >
        <div className="relative group/card">
          {/* Mobile Glow Background */}
          <div className="absolute inset-0 bg-[#F6c543]/5 rounded-[2rem] blur-xl lg:hidden" />
          
          <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 rounded-[2rem] relative z-10 shadow-2xl transition-all duration-500 group-hover/card:border-[#F6c543]/30 group-hover/card:bg-[#121212]">
            
            {/* Year Badge */}
            <div className={`flex lg:block ${isLeft ? 'lg:justify-end' : 'justify-start'} mb-4`}>
              <span className="px-3 py-1 rounded-md bg-[#F6c543] text-black font-mono text-[9px] font-black uppercase tracking-tighter">
                {data.year}
              </span>
            </div>
            
            <h4 className="text-lg md:text-2xl font-black text-white mb-2 uppercase italic leading-tight group-hover/card:text-[#F6c543] transition-colors">
              {data.degree || data.role}
            </h4>
            
            <p className="text-[#F6c543]/80 font-bold text-[11px] md:text-sm mb-3 tracking-widest uppercase">
              {data.institute || data.company}
            </p>
            
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-4 lg:line-clamp-none">
              {data.description}
            </p>

            {/* Mobile Touch Feedback Indicator */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-[#F6c543] rounded-full lg:hidden animate-ping" />
          </div>
        </div>
      </motion.div>

      {/* --- Timeline Dots (Mobile & Desktop) --- */}
      <div className="absolute left-[12px] md:left-[20px] lg:left-1/2 top-0 bottom-[-40px] lg:bottom-[-96px]">
        {/* The Dot */}
        <div className="sticky top-1/2 w-4 h-4 md:w-5 md:h-5 bg-black border-2 border-[#F6c543] rounded-full transform -translate-x-1/2 z-30 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#F6c543]">
           <div className="absolute inset-0 bg-[#F6c543] rounded-full animate-ping opacity-20" />
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden lg:block w-[45%]" />
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 lg:py-32 bg-black text-white relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F6c543]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Mobile Header (Centered) */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-7xl font-black italic uppercase tracking-tighter"
          >
            My <span className="text-[#F6c543] drop-shadow-[0_0_15px_rgba(246,197,67,0.3)]">Story</span>
          </motion.h2>
          <div className="w-20 h-1 bg-[#F6c543] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line - Mobile Optimized Positioning */}
          <div className="absolute left-[12px] md:left-[20px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#F6c543]/50 via-white/10 to-transparent transform lg:-translate-x-1/2" />

          {/* Data Sections */}
          <div className="space-y-4 lg:space-y-0">
            {/* Mobile Section Title */}
            <div className="lg:hidden pl-10 mb-8 font-black text-[#F6c543] italic uppercase text-sm tracking-[0.2em]">Education</div>
            {EDUCATION_DATA.map((edu, index) => (
              <ResumeCard key={`edu-${index}`} data={edu} isLeft={true} index={index} />
            ))}

            <div className="lg:hidden pl-10 my-8 font-black text-[#F6c543] italic uppercase text-sm tracking-[0.2em]">Experience</div>
            {EXPERIENCE_DATA.map((exp, index) => (
              <ResumeCard key={`exp-${index}`} data={exp} isLeft={false} index={index} />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 lg:mt-32 text-center px-4"
        >
          <a
            href="#"
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#F6c543] text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:shadow-[0_0_30px_#F6c543] transition-all"
          >
            Download Full CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;