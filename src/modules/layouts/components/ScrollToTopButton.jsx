import React from "react";
import { HiArrowUp } from "react-icons/hi";
import { useScrollToTop } from "../hooks/useScrollToTop";

const ScrollToTopButton = () => {
  const { visible, scrollToTop } = useScrollToTop(300);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#F6c543] text-black p-4 rounded-full shadow-[0_0_15px_rgba(246,197,67,0.4)] hover:shadow-[0_0_25px_rgba(246,197,67,0.6)] hover:scale-110 active:scale-95 transform transition-all duration-300 z-[9999] flex items-center justify-center border border-[#F6c543] cursor-pointer"
      aria-label="Scroll to top"
    >
      <HiArrowUp className="w-6 h-6 stroke-2" />
    </button>
  );
};

export default ScrollToTopButton;