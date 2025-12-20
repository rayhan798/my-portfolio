import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_CATEGORIES, projectAnimation } from "../data/portfolioData";
import { usePortfolio } from "../hooks/usePortfolio";

const PortfolioSection = () => {
  const { filter, setFilter, filteredProjects } = usePortfolio();

  return (
    <section id="portfolio" className="w-full py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#F6c543]/10 border border-[#F6c543]/20 text-[#F6c543] px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block"
          >
            My Works
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-10">Creative <span className="text-[#F6c543]">Portfolio</span></h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === cat 
                  ? "bg-[#F6c543] text-black border-[#F6c543]" 
                  : "bg-transparent text-gray-400 border-white/10 hover:border-[#F6c543]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                {...projectAnimation}
                className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* Responsive Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 backdrop-blur-[1px]">
                  <div className="translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#F6c543] text-[10px] md:text-xs font-black tracking-widest uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-white font-bold text-xs md:text-sm bg-[#F6c543]/90 md:bg-white/20 hover:bg-[#F6c543] hover:text-black px-5 py-2.5 rounded-xl transition-all w-fit"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;