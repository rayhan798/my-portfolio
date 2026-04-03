import React from "react";
import { HiArrowUp } from "react-icons/hi";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

const ScrollToTopButton = () => {
  const visible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 bg-[#F6c543] text-black p-3 rounded-full
        shadow-[0_0_15px_rgba(246,197,67,0.4)]
        hover:shadow-[0_0_25px_rgba(246,197,67,0.6)]
        hover:scale-110 active:scale-90
        transition-all duration-500 ease-in-out
        z-[9999] flex items-center justify-center
        border border-[#F6c543] cursor-pointer
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-50 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;