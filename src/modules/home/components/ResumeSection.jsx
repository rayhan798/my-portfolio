import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data/resumeData";

const ResumeCard = ({ data, isLeft, index }) => {
  return (
    <div className={`relative flex items-center justify-between w-full mb-12 lg:mb-20 group ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* --- Advanced Professional Card --- */}
      <motion.div
        initial={{ 
          opacity: 0, 
          x: isLeft ? -80 : 80,
          rotateX: 20,
          scale: 0.95
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          rotateX: 0,
          scale: 1
        }}
        viewport={{ once: false, amount: 0.4 }} 
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.05 
        }}
        className="w-full lg:w-[42%] pl-12 lg:pl-0 perspective-1000" // কার্ডের সাইজ কমানোর জন্য width 42% করা হয়েছে
      >
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative group/card bg-[#0a0a0a] border border-white/10 p-5 md:p-8 rounded-[2rem] shadow-2xl transition-all duration-500 hover:border-[#F6c543]/40 overflow-hidden"
        >
          
          {/* Year Badge */}
          <div className={`mb-4 flex ${isLeft ? 'lg:justify-end' : 'justify-start'}`}>
            <span className="px-4 py-1 rounded-full bg-[#F6c543] text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[0_5px_15px_rgba(246,197,67,0.2)]">
              {data.year}
            </span>
          </div>

          {/* Title - Italic Fixed */}
          <h4 className={`text-xl md:text-2xl font-black text-white mb-2 uppercase italic tracking-tight group-hover/card:text-[#F6c543] transition-colors ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
            {data.degree || data.role}
          </h4>

          {/* Subtitle - Italic Fixed */}
          <p className={`text-[#F6c543]/90 font-bold text-[12px] md:text-[13px] mb-3 tracking-[0.15em] uppercase italic ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
            {data.institute || data.company}
          </p>

          {/* Description */}
          <p className={`text-gray-400 text-xs md:text-sm leading-relaxed font-medium italic opacity-80 group-hover/card:opacity-100 transition-opacity ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
            {data.description}
          </p>
        </motion.div>
      </motion.div>

      {/* --- Center Timeline Dot --- */}
      <div className="absolute left-[20px] md:left-[29px] lg:left-1/2 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 z-30">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          className="w-5 h-5 md:w-6 md:h-6 bg-black border-[3px] border-[#F6c543] rounded-full flex items-center justify-center shadow-[0_0_15px_#F6c543]"
        >
          <div className="w-2 h-2 bg-[#F6c543] rounded-full animate-pulse" />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden lg:block w-[42%]" />
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 lg:py-32 bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#F6c543]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#F6c543]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* --- My Story Header (Returned & Fixed) --- */}
        <div className="text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
              My <span className="text-[#F6c543]">Story</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F6c543] mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-[20px] md:left-[29px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#1a1a1a] transform lg:-translate-x-1/2">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "linear" }}
              className="w-full bg-gradient-to-b from-[#F6c543] via-[#F6c543]/40 to-transparent"
            />
          </div>

          <div className="relative">
            {/* Mobile Labels */}
            <div className="lg:hidden pl-14 mb-10 font-black text-[#F6c543] italic uppercase text-xs tracking-[0.4em] opacity-60">
              // Education
            </div>
            
            {EDUCATION_DATA.map((edu, index) => (
              <ResumeCard key={`edu-${index}`} data={edu} isLeft={true} index={index} />
            ))}

            <div className="lg:hidden pl-14 my-14 font-black text-[#F6c543] italic uppercase text-xs tracking-[0.4em] opacity-60">
              // Experience
            </div>

            {EXPERIENCE_DATA.map((exp, index) => (
              <ResumeCard key={`exp-${index}`} data={exp} isLeft={false} index={index} />
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-20 lg:mt-32 text-center"
        >
          <motion.a
            href="/RAYHAN.pdf"
            download="Md_Rayhan_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#F6c543] text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-full transition-all shadow-[0_10px_30px_rgba(246,197,67,0.2)] hover:shadow-[#F6c543]/40"
          >
            Download Full CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;