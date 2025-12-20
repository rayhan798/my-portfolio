import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export const navLinks = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Services", path: "services" },
  { name: "Skills", path: "skills" },
  { name: "Resume", path: "resume" }, 
  { name: "Portfolio", path: "portfolio" },
  { name: "FAQ", path: "faq" },
  { name: "Contact", path: "contact" },
];

export const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/rayhan798/" },
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/rayhan-4a1117336/" },
  { icon: <FaFacebookF />, url: "https://www.facebook.com/RxUnknownCreations7" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/rx__rayhan__7/" },
];