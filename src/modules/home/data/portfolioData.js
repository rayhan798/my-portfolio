import FoodHub from "../../../assets/Screenshot 2026-05-03 134725.png";
import Planora from "../../../assets/Screenshot 2026-05-03 135725.png";
import SpotSync from "../../../assets/Go api.png";
import Vehicle from "../../../assets/TS api.png";

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Design",
  "Web App",
  "Development",
  "Graphic",
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "FoodHub - Food Delivery App",
    category: "Web App",
    image: FoodHub,
    link: "https://foodhub-frontend-sandy.vercel.app",
  },
  {
    id: 2,
    title: "Planora - Event Management Platform",
    category: "Web App",
    image: Planora,
    link: "https://planora-frontend-five.vercel.app",
  },
  {
    id: 3,
    title: "SpotSync - Smart Parking & EV Charging System",
    category: "Web App",
    image: SpotSync,
    link: "https://spotsync-api-j0ga.onrender.com",
  },
  {
    id: 4,
    title: "Vehicle Rental System",
    category: "Web App",
    image: Vehicle,
    link: "https://vehicle-rental-system-five-ebon.vercel.app",
  },
  // {
  //   id: 5,
  //   title: "Brand Identity",
  //   category: "Graphic",
  //   image:
  //     "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   title: "Social App UI",
  //   category: "Web Design",
  //   image:
  //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  //   link: "#",
  // },
  // {
  //   id: 7,
  //   title: "SaaS Landing Page",
  //   category: "Development",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  //   link: "#",
  // },
  // {
  //   id: 8,
  //   title: "Minimalist Logo",
  //   category: "Graphic",
  //   image:
  //     "https://images.unsplash.com/photo-1541462608141-ad511aaeee59?q=80&w=1000&auto=format&fit=crop",
  //   link: "#",
  // },
];

export const projectAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.4 },
};
