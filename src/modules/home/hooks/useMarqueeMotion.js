// src/hooks/useMarqueeMotion.js
import { useEffect, useState } from "react";
import {
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

const useMarqueeMotion = () => {
  const baseX = useMotionValue(0);
  const [speed, setSpeed] = useState(40);

  /* 🔹 Mouse-follow speed control */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const center = window.innerWidth / 2;
      const distance = Math.abs(e.clientX - center);
      setSpeed(40 + distance / 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* 🔹 Infinite marquee animation */
  useAnimationFrame((_, delta) => {
    baseX.set(baseX.get() - (speed * delta) / 1000);
  });

  /* 🔹 Wrap effect */
  const x = useTransform(baseX, (v) => `${v % 100}%`);

  return { x };
};

export default useMarqueeMotion;
