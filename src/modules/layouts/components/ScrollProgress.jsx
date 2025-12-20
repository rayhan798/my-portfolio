import React from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Background Track */}
      <div className="fixed right-0 top-0 w-[2px] h-full bg-white/5 z-[10000]" />

      {/* Main Progress Line */}
      <div
        className="fixed right-0 top-0 w-[3px] bg-[#F6c543] z-[10001] transition-all duration-150 ease-out origin-top"
        style={{ 
          height: `${scrollProgress}%`, 
          boxShadow: "-2px 0 15px rgba(246, 197, 67, 0.4)", 
          background: "linear-gradient(to bottom, #F6c543, #ffae00)" 
        }}
      />

      {/* Glowing Dot */}
      <div 
        className="fixed right-[-4px] w-3 h-3 bg-[#F6c543] rounded-full z-[10002] transition-all duration-150 ease-out shadow-[0_0_15px_#F6c543]"
        style={{ 
          top: `${scrollProgress}%`,
          transform: `translateY(-50%)`,
          opacity: scrollProgress > 1 ? 1 : 0 
        }}
      />
    </>
  );
};

export default ScrollProgress;