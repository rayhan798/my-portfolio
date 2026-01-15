import React from "react";
import { HiArrowUp } from "react-icons/hi";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

const ScrollToTopButton = () => {
  const visible = useScrollVisibility(100);
  const scrollToTop = () => {
    const duration = 2000;
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing Function: Quintic Out
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);

      window.scrollTo(0, start * (1 - easeOutQuint));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 bg-[#F6c543] text-black p-3 rounded-full
        shadow-[0_0_10px_rgba(246,197,67,0.3)]
        hover:shadow-[0_0_20px_rgba(246,197,67,0.5)]
        hover:scale-110 active:scale-95
        transform transition-all duration-300
        z-[9999] flex items-center justify-center
        border border-[#F6c543] cursor-pointer

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-5 h-5 stroke-[2px]" />
    </button>
  );
};

export default ScrollToTopButton;
