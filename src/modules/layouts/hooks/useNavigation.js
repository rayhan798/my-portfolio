import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const customScrollTo = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1300;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing Function: OutQuart
      const ease = 1 - Math.pow(1 - progress, 4);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      customScrollTo(offsetPosition);

      setOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  };

  return { open, setOpen, scrollToSection, navigate };
};
