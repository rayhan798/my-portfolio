import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setOpen(false); 
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  return { open, setOpen, scrollToSection, navigate };
};