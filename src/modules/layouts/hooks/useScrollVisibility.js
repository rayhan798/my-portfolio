import { useState, useEffect } from "react";

/**
 * Custom hook to show/hide element on scroll
 * @param {number} scrollThreshold - scrollY distance to show element
 * @returns {boolean} visible
 */
export const useScrollVisibility = (scrollThreshold = 150) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return visible;
};
