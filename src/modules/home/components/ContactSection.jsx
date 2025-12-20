import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { contactInfo, contactText } from "../data/contactData";
import { useContactForm } from "../hooks/useContactForm";

const ContactSection = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F6c543]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#F6c543]/10 border border-[#F6c543]/20 text-[#F6c543] px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 inline-block"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black">Let's Work <span className="text-[#F6c543]">Together</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {contactText.title} <span className="text-gray-500 italic font-light text-2xl">{contactText.subtitle}</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{contactText.description}</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#F6c543] text-xl group-hover:bg-[#F6c543] group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-[#F6c543] transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F6c543] ml-2">Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F6c543] transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#F6c543] ml-2">Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F6c543] transition-all" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#F6c543] ml-2">Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Project Discussion" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F6c543] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#F6c543] ml-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell me about your project..." className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#F6c543] transition-all resize-none" required></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#F6c543] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest cursor-pointer"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;