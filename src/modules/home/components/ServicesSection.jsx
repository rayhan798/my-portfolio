import React from "react";
import { motion } from "framer-motion";
import { SERVICES_LIST, cardVariants } from "../data/servicesData"; // পাথটি আপনার ফোল্ডার অনুযায়ী চেক করুন

const Services = () => {
  return (
    <section id="services" className="w-full py-24 bg-black text-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-golden-yellow/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 text-[#F6c543] px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-black mb-6"
          >
            How I Can <span className="text-[#F6c543]">Help You</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#F6c543] rounded-full"></div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group p-1 rounded-[2.5rem] overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-[#F6c543]/20 group-hover:from-[#F6c543]/40 group-hover:to-transparent transition-all duration-500"></div>

              {/* Card Body */}
              <div className="relative bg-[#0a0a0a] p-10 rounded-[2.4rem] h-full flex flex-col items-start border border-white/5 group-hover:border-[#F6c543]/30 transition-all duration-500">
                
                <div className="w-full flex justify-between items-start mb-8">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="text-white/10 font-black text-4xl group-hover:text-[#F6c543]/20 transition-colors">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#F6c543] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Bottom Line Animation */}
                <div className="mt-8 w-0 h-1 bg-[#F6c543] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;