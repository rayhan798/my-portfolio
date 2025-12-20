
export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export const SERVICES_LIST = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites with high performance and clean code.",
    icon: "💻", 
    id: "01"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and aesthetically pleasing user interfaces for better engagement.",
    icon: "🎨",
    id: "02"
  },
  {
    title: "SEO Optimization",
    description: "Boosting your search rankings and driving organic traffic to your digital platform.",
    icon: "🚀",
    id: "03"
  },
  {
    title: "App Development",
    description: "Building powerful cross-platform mobile apps for iOS and Android devices.",
    icon: "📱",
    id: "04"
  },
  {
    title: "Digital Branding",
    description: "Creating a unique brand identity that stands out in the competitive market.",
    icon: "💎",
    id: "05"
  },
  {
    title: "Expert Consultancy",
    description: "Providing strategic tech advice to scale your business and projects efficiently.",
    icon: "💡",
    id: "06"
  },
];