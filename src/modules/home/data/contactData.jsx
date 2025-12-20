import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const contactInfo = [
  { 
    icon: <FaPhoneAlt />, 
    label: "Call Me", 
    val: "+880 1518 979 553" 
  },
  { 
    icon: <FaEnvelope />, 
    label: "Email Me", 
    val: "mdrayhan0474@gmail.com" 
  },
  { 
    icon: <FaMapMarkerAlt />, 
    label: "Location", 
    val: "Chattogram, Bangladesh" 
  }
];

export const contactText = {
  title: "Contact",
  subtitle: "Information",
  description: "Have a project in mind? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
};