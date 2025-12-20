import React from "react";
import { LayoutDashboard, Briefcase, GraduationCap, Code2, MessageSquare } from "lucide-react";

export const MENU_ITEMS = [
  { name: "Overview", icon: <LayoutDashboard size={18} /> },
  { name: "Projects", icon: <Code2 size={18} /> },
  { name: "Experience", icon: <Briefcase size={18} /> },
  { name: "Education", icon: <GraduationCap size={18} /> },
  { name: "Messages", icon: <MessageSquare size={18} /> },
];

export const STATS_DATA = [
  { label: "Total Projects", value: "12", color: "text-blue-500" },
  { label: "Experience Years", value: "3+", color: "text-green-500" },
  { label: "Pending Messages", value: "05", color: "text-[#F6c543]" },
];