import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaTimes, FaBars } from "react-icons/fa";
import logoImg from "../../../assets/raihan-vai-logo-1.png"; 
import { navLinks, socialLinks } from "../data/navData";
import { useNavigation } from "../hooks/useNavigation";

const Header = () => {
  const { open, setOpen, scrollToSection, navigate } = useNavigation();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")} 
            className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => link.path.startsWith("/") ? navigate(link.path) : scrollToSection(link.path)}
                className="text-sm font-medium text-gray-200 hover:text-[#F6c543] transition-all duration-300 px-3 py-1 hover:border hover:border-[#F6c543] hover:rounded-2xl cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-gray-200">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-[#F6c543]">
                {social.icon}
              </a>
            ))}
        
          </div>

          {/* Burger Button (Mobile) */}
          <button onClick={() => setOpen(true)} className="lg:hidden text-white text-2xl p-2">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-72 bg-[#0f0f0f] border-l border-white/10 z-[60] transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-[#F6c543] text-3xl hover:rotate-90 transition-transform duration-300">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className="text-xl font-semibold text-gray-200 hover:text-[#F6c543] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-12 left-0 w-full">
          <div className="flex justify-center gap-6 text-2xl text-gray-400">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="hover:text-[#F6c543] transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-6 tracking-widest uppercase font-bold">Rayhan Portfolio</p>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden" onClick={() => setOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;