import React from "react";
import { techLogos } from "../data/logoService";

const AdvancedLogoMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-10 -mt-1 z-20 border-0 outline-none shadow-none">
      
      {/* Side Gradients: Only for Desktop */}
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-32 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-30" />
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-32 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-30" />

      {/* Main Content */}
      <div className="w-full px-0 border-0 outline-none">
        <div className="flex items-center marquee border-0 outline-none">
          
          {[...techLogos, ...techLogos].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-6 md:px-12 border-0 outline-none"
            >
              {/* Logo Icon */}
              <div className="w-8 h-8 md:w-12 md:h-12 border-0">
                <img
                  src={`https://cdn.simpleicons.org/${logo.icon}/white`}
                  alt={logo.name}
                  className="w-full h-full object-contain opacity-50 border-0 shadow-none drop-shadow-none"
                />
              </div>
              
              {/* Logo Name */}
              <span className="text-white/40 text-xl md:text-3xl font-bold tracking-tighter capitalize whitespace-nowrap border-0 outline-none">
                {logo.name.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedLogoMarquee;