// hooks/useDashboard.js
import { useState } from "react";

export const useDashboard = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [darkMode, setDarkMode] = useState(true);
  const [adminUser, setAdminUser] = useState({
    name: "Raihan",
    role: "Full Stack Developer",
    profilePic: null,
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAdminUser(prev => ({ ...prev, profilePic: URL.createObjectURL(file) }));
    }
  };

  const themeStyles = {
    bgColor: darkMode ? "bg-[#050505] text-white" : "bg-[#f8f9fa] text-slate-900",
    cardBg: darkMode ? "bg-[#0a0a0a] border-white/5" : "bg-white border-slate-200 shadow-sm",
    sidebarBg: darkMode ? "bg-[#0a0a0a] border-white/5" : "bg-white border-slate-200 shadow-md",
    textColorSecondary: darkMode ? "text-gray-500" : "text-slate-500",
    inputBg: darkMode ? "bg-black border-white/10" : "bg-white border-slate-200",
  };

  return { activeTab, setActiveTab, darkMode, toggleDarkMode, adminUser, handleProfilePicChange, themeStyles };
};