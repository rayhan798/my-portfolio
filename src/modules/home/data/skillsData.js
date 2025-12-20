// src/data/skillsData.js

export const SKILLS_DATA = [
  { name: "React.js", level: "90%" },
  { name: "Next.js", level: "85%" },
  { name: "Tailwind CSS", level: "95%" },
  { name: "Framer Motion", level: "80%" },
  { name: "JavaScript", level: "92%" },
  { name: "TypeScript", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "Redux", level: "85%" },
];

export const fadeInVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8 } 
  }
};

export const itemVariant = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { delay: index * 0.1, duration: 0.5 } 
  }
});