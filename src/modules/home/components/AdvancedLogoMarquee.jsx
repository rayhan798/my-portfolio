import React from "react";
import { motion } from "framer-motion";
import { techLogos } from "../data/logoService";
import useMarqueeMotion from "../hooks/useMarqueeMotion";

const AdvancedLogoMarquee = () => {
  const { x } = useMarqueeMotion();

  return (
    <div className="relative w-full overflow-hidden bg-black py-6 md:py-8 z-20 border-y border-black/50">

      {/* 🔹 Glassy Side Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-48 bg-gradient-to-r from-black via-black/40 to-transparent z-30" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-48 bg-gradient-to-l from-black via-black/40 to-transparent z-30" />

      <div className="flex whitespace-nowrap">
        <motion.div
          style={{ x }}
          className="flex items-center shrink-0"
        >
          {[...techLogos, ...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 px-6 md:px-10 shrink-0"
            >
              {/* Logo Icon  */}
              <div className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={`https://cdn.simpleicons.org/${logo.icon === "amazon-aws" ? "amazon" : logo.icon}/white`}
                  alt={logo.name}
                  onError={(e) => {
                    e.target.src = "https://img.icons8.com/color/48/amazon-web-services.png";
                    e.target.style.filter = "brightness(0) invert(1)";
                  }}
                  className="w-full h-full object-contain opacity-30 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Logo Name - Capitalize*/}
              <span className="text-white/50 text-lg md:text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-white capitalize">
                {logo.name.toLowerCase()}
              </span>

              {/* Separator Dot */}
              <div className="ml-6 md:ml-10 w-1 h-1 rounded-full bg-white/10 group-last:hidden" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedLogoMarquee;