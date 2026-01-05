import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollVisibility } from "../hooks/useScrollVisibility";

const ScrollToWhatsAppButton = () => {
  const visible = useScrollVisibility(150);

  const openWhatsApp = () => {
    window.open("https://wa.me/8801518979553", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`
        fixed bottom-24 right-6 bg-[#25D366] text-white p-3 rounded-full
        shadow-[0_0_10px_rgba(37,211,102,0.3)]
        hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]
        hover:scale-105 active:scale-95
        transform transition-all duration-300
        z-[9999] flex items-center justify-center
        border border-[#25D366] cursor-pointer

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToWhatsAppButton;
