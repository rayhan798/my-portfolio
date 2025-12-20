import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 relative z-10 border-t border-white/5">
      {/* Background Effect: একটি হালকা গ্লো ইফেক্ট যা ফুটারের মাঝখানে থাকবে */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#F6c543]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Column: Copyright */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="mb-0 text-sm md:text-base tracking-wide">
              © {new Date().getFullYear()}{" "}
              <span className="text-[#F6c543] font-bold tracking-tighter">
                RAYHAN<span className="text-white">.</span>
              </span>
              {" "}All rights reserved.
            </p>
          </div>

          {/* Right Column: Credits */}
          <div className="text-center md:text-right order-1 md:order-2">
            <p className="mb-0 text-sm md:text-base flex items-center justify-center md:justify-end gap-2">
              <span className="opacity-60">Design & Developed ❤️ by</span>
              <a
                href="https://www.facebook.com/RxUnknownCreations7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F6c543] font-semibold transition-all duration-300 relative group"
              >
                RAYHAN
                {/* Hover Underline Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F6c543] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;