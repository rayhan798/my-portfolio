import React from 'react';
import { motion } from 'framer-motion';


const iconData = [
  // Orbit 1
  { orbit: 1, iconClass: 'devicon-html5-plain colored' },
  { orbit: 1, iconClass: 'devicon-css3-plain colored' },
  { orbit: 1, iconClass: 'devicon-php-plain colored' },
  { orbit: 1, iconClass: 'devicon-bootstrap-plain colored' },
  // Orbit 2
  { orbit: 2, iconClass: 'devicon-react-original colored' },
  { orbit: 2, iconClass: 'devicon-nextjs-plain-wordmark colored' },
  { orbit: 2, iconClass: 'devicon-tailwindcss-original colored' },
  { orbit: 2, iconClass: 'devicon-typescript-plain colored' },
  { orbit: 2, iconClass: 'devicon-nodejs-plain-wordmark colored' },
  { orbit: 2, iconClass: 'devicon-javascript-plain colored' },
  // Orbit 3
  { orbit: 3, iconClass: 'devicon-c-plain colored' },
  { orbit: 3, iconClass: 'devicon-cplusplus-plain colored' },
  { orbit: 3, iconClass: 'devicon-csharp-plain colored' },
  { orbit: 3, iconClass: 'devicon-java-plain colored' },
  { orbit: 3, iconClass: 'devicon-mysql-plain colored' },
  { orbit: 3, iconClass: 'devicon-mongodb-plain colored' },
  { orbit: 3, iconClass: 'devicon-docker-plain colored' },
];

const TechIcon = ({ iconClass, index, total, radius }) => {
  const angle = (index / total) * Math.PI * 2;
  const targetX = Math.cos(angle) * radius;
  const targetY = Math.sin(angle) * radius;

  return (
    <motion.div 
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }} 
      animate={{ x: targetX, y: targetY, opacity: 1, scale: 1 }} 
      transition={{ 
        type: "spring", 
        stiffness: 60, 
        damping: 12, 
        delay: radius * 0.002 + index * 0.05 
      }}
      className="absolute top-1/2 left-1/2"
      style={{ marginLeft: "-25px", marginTop: "-25px", zIndex: 50 }}
    >
      <div className="tech-icon w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white rounded-full flex justify-center items-center text-xl md:text-2xl shadow-xl border border-gray-200">
        <i className={iconClass}></i>
      </div>
    </motion.div>
  );
};

// ২. Orbit
const Orbit = ({ orbitNum, rotationDuration, reverse = false, zIndexValue }) => {
 
  const icons = iconData.filter(item => item.orbit === orbitNum);
  const radius = orbitNum === 1 ? 120 : orbitNum === 2 ? 200 : 300;
  

  const sizeClass = orbitNum === 1 
    ? 'w-[240px] h-[240px]' 
    : orbitNum === 2 
    ? 'w-[400px] h-[400px]' 
    : 'w-[600px] h-[600px]';

  return (
    <motion.div 
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ 
        duration: rotationDuration, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className={`absolute border border-white/5 rounded-full flex items-center justify-center ${sizeClass}`}
      style={{ zIndex: zIndexValue }} 
    >
      {icons.map((icon, index) => (
        <TechIcon 
          key={index} 
          index={index} 
          total={icons.length} 
          radius={radius}
          iconClass={icon.iconClass} 
        />
      ))}
    </motion.div>
  );
};

const TechGalaxy = () => {
  return (
    <div className="galaxy relative flex items-center justify-center w-full h-full min-h-[400px]"> 
      {/* Orbit 1 */}
      <Orbit orbitNum={1} rotationDuration={25} zIndexValue={1} />

      {/* Orbit 2 */}
      <Orbit orbitNum={2} rotationDuration={45} reverse={true} zIndexValue={10} />

      {/* ৩. Orbit 3: */}
      <Orbit orbitNum={3} rotationDuration={65} zIndexValue={100} />
    </div>
  );
};

export default TechGalaxy;