import React from "react";
import { FaRocket, FaClock, FaShieldAlt, FaAward } from "react-icons/fa";

export const faqsList = [
  {
    question: "What services do you provide?",
    answer: "I offer a wide range of services including Web Development (React, Next.js), UI/UX Design, Mobile App Development, and SEO Optimization.",
  },
  {
    question: "How much do you charge?",
    answer: "The cost depends on the complexity of the project. I offer competitive pricing and custom packages based on your requirements.",
  },
  {
    question: "What is your typical timeline?",
    answer: "A standard website usually takes 1-3 weeks, while complex applications might take 4-8 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, I provide free support for 30 days after the project launch to ensure everything runs smoothly.",
  },
];

export const features = [
  { icon: <FaRocket />, title: "Fast Performance", desc: "Optimized code for blazing speed." },
  { icon: <FaShieldAlt />, title: "Secure Coding", desc: "High-end security best practices." },
  { icon: <FaClock />, title: "On-time Delivery", desc: "Your deadlines are my priority." },
  { icon: <FaAward />, title: "Quality First", desc: "Pixel perfect and clean UI design." },
];