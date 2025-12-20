import { useState } from "react";
import { PROJECTS_DATA } from "../data/portfolioData";

export const usePortfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return { filter, setFilter, filteredProjects };
};