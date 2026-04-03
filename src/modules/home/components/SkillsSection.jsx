import React from "react";
import { motion } from "framer-motion";
import logoImg from "../../../assets/raihan-vai-logo-background.jpg";

// স্কিল ডাটা সরাসরি এখানে অ্যাড করে দেওয়া হলো যাতে বুঝতে সুবিধা হয়
const FULL_STACK_SKILLS = [
  { name: "Frontend (React / Next.js)", level: "95%" },
  { name: "Backend (Node.js / Express)", level: "85%" },
  { name: "Database (MongoDB / PostgreSQL)", level: "80%" },
  { name: "UI/UX (Tailwind / Shadcn)", level: "90%" },
  { name: "API (REST / GraphQL)", level: "85%" },
  { name: "DevOps (Git / Vercel / Docker)", level: "75%" },
];

const fadeInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const itemVariant = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: index * 0.1, duration: 0.5 } 
  }
});

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-black text-white relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#F6c543]/10 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />

      {/* Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Identity Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="relative cursor-pointer group"
          >
            {/* Soft Glow behind image */}
            <div className="absolute inset-0 bg-[#F6c543] rounded-[2.5rem] blur-3xl opacity-5 group-hover:opacity-15 transition-opacity duration-500" />

            <div className="relative w-56 h-56 md:w-72 md:h-72 bg-[#121212] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-[#F6c543]/40">
              <motion.img
                src={logoImg}
                alt="Identity Logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side: Content & Skills Grid */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-[#F6c543] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">
                Technical Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-[1.1] tracking-tighter">
                Full Stack
                <span className="text-[#F6c543] drop-shadow-[0_0_15px_rgba(246,197,67,0.3)]">
                  {" "}Architect
                </span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
                Building scalable, maintainable, and high-performance web applications using modern technologies.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto lg:mx-0">
              {FULL_STACK_SKILLS.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariant(index)}
                  className="flex flex-col gap-3 group"
                >
                  <div className="flex justify-between items-end">
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#F6c543] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-[#F6c543] text-[10px] font-mono font-bold">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-[3px] w-full bg-white/5 relative rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#F6c543]/40 to-[#F6c543] shadow-[0_0_10px_rgba(246,197,67,0.6)]"
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