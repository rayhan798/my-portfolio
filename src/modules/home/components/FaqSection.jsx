import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqsList, features } from "../data/faqData";
import { useFAQ } from "../hooks/useFAQ";

const FaqSection = () => {
  const { activeIndex, toggleFAQ } = useFAQ();

  return (
    <section id="faq" className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-[#F6c543]/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#F6c543]/10 border border-[#F6c543]/20 text-[#F6c543] px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block"
          >
            Help Center
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black">
            Expert <span className="text-[#F6c543]">Solutions</span> & FAQ
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            {faqsList.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "border-[#F6c543] bg-[#F6c543]/5" : "border-white/10 bg-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-lg font-bold ${activeIndex === index ? "text-[#F6c543]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeIndex === index ? "bg-[#F6c543] text-black rotate-180" : "bg-white/10 text-[#F6c543]"
                  }`}>
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#F6c543]/20 to-transparent p-[1px] rounded-[2.5rem]">
              <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
                <h3 className="text-3xl font-black mb-8 relative z-10 leading-tight">
                  Why Work <br /> <span className="text-[#F6c543]">With Me?</span>
                </h3>
                <div className="space-y-8 relative z-10">
                  {features.map((item, idx) => (
                    <motion.div key={idx} whileHover={{ x: 10 }} className="flex gap-5 items-start">
                      <div className="w-12 h-12 bg-[#F6c543] text-black rounded-xl flex items-center justify-center text-xl shrink-0 shadow-[0_0_15px_rgba(246,197,67,0.3)]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;