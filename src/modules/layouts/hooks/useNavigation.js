import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    
    if (element) {
      // মেনু সাথে সাথে বন্ধ হবে যেন ল্যাগ না লাগে
      setOpen(false);

      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      // ল্যাগ কমানোর জন্য নেটিভ স্মুথ স্ক্রল ব্যবহার করা হয়েছে
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

    } else {
      // অন্য পেজে থাকলে হোম পেজে পাঠিয়ে তারপর স্ক্রল করা
      navigate("/");
      // নেভিগেশনের পর অল্প সময় গ্যাপ দিয়ে স্ক্রল ট্রিগার করা
      setTimeout(() => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const offset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth"
          });
        }
      }, 100); 
    }
  };

  return { open, setOpen, scrollToSection, navigate };
};