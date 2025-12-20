export const PORTFOLIO_CATEGORIES = ["All", "Web Design", "Development", "Graphic"];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Luxury E-commerce",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Graphic",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Social App UI",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "Minimalist Logo",
    category: "Graphic",
    image: "https://images.unsplash.com/photo-1541462608141-ad511aaeee59?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  }
];

export const projectAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.4 }
};