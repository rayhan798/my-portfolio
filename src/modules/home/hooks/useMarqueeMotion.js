// src/hooks/useMarqueeMotion.js
import { useEffect, useState } from "react";
import { useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

const useMarqueeMotion = () => {
  /*
   * 1. 'Right side theke start' baseX 0।
   */
  const baseX = useMotionValue(0); 
  const [speed, setSpeed] = useState(2);

  useEffect(() => {
    const width = window.innerWidth;
    
   
    let initialSpeed = width < 768 ? 3 : 2;
    setSpeed(initialSpeed);

    const handleMouseMove = (e) => {
      if (width >= 1024) {
        const center = window.innerWidth / 2;
        const distance = Math.abs(e.clientX - center);
        setSpeed(initialSpeed + distance / 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame((_, delta) => {
    let moveBy = speed * (delta / 5000);
    baseX.set(baseX.get() - moveBy);
  });

  const x = useTransform(baseX, (v) => {

    const mod = ((v % 50) + 50) % 50; 
    return `-${mod}%`; 
  });

  return { x };
};

export default useMarqueeMotion;