import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SupportFooter = () => {

  const socialLinks = [
    { Icon: FaFacebookF, link: "https://www.facebook.com/RxUnknownCreations7" },
    { Icon: FaInstagram, link: "https://www.instagram.com/rx__rayhan__7/?hl=en" },
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/rayhan-4a1117336/" },
    { Icon: FaGithub, link: "https://github.com/rayhan798/" },
  ];

  return (
    <footer className="relative z-10 bg-black text-gray-200 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* Contact Info */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#F6c543] underline-offset-8 decoration-2">Contact Me</h3>
            <a href="tel:+8801518979553" className="flex items-center gap-4 group cursor-pointer">
              <FaPhoneAlt className="text-[#F6c543] text-lg transition-transform group-hover:scale-110" />
              <span className="group-hover:text-[#F6c543] transition-colors">+880 1518-979553</span>
            </a>
            <a href="mailto:mdrayhan0474@gmail.com" className="flex items-center gap-4 group cursor-pointer">
              <FaEnvelope className="text-[#F6c543] text-lg transition-transform group-hover:scale-110" />
              <span className="group-hover:text-[#F6c543] transition-colors">mdrayhan0474@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 group cursor-pointer">
              <FaMapMarkerAlt className="text-[#F6c543] text-lg transition-transform group-hover:scale-110" />
              <span className="group-hover:text-[#F6c543] transition-colors">Chattogram, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#F6c543] underline-offset-8 decoration-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {["Home", "About", "Services", "Skills", "Portfolio", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="relative group text-gray-400 hover:text-[#F6c543] transition-colors inline-block"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#F6c543] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#F6c543] underline-offset-8 decoration-2">Stay Connected</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 border border-white/10 text-white p-3 rounded-full transition-all duration-300 hover:bg-[#F6c543] hover:text-black hover:border-[#F6c543] hover:-translate-y-2 shadow-lg hover:shadow-[#F6c543]/20"
                >
                  <social.Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-4 underline decoration-[#F6c543] underline-offset-8 decoration-2">Our Location</h3>
            <div className="w-full h-48 rounded-2xl overflow-hidden shadow-2xl ">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.7001022167!2d91.7538804!3d22.3303701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5ca6bc840!2sChattogram!5e0!3m2!1sen!2sbd!4v1700000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Golden Glows */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </footer>
  );
};

export default SupportFooter;
     
          
   


  

