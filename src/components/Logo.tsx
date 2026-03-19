import React from "react";
import { motion } from "motion/react";
import { greeting } from "../portfolio";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  const imgSizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16 md:w-20 h-20",
  };

  if (greeting.logo_path) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-2 ${className}`}
      >
        <img 
          src={greeting.logo_path} 
          alt={greeting.logo_name} 
          className={`${imgSizeClasses[size]} object-contain rounded-full`}
          referrerPolicy="no-referrer"
        />
        <div className={`flex items-center gap-1 font-signature text-primary ${sizeClasses[size]}`}>
          <span className="font-sans font-light text-slate-400">&lt;</span>
          <span className="px-1">{greeting.logo_name}</span>
          <span className="font-sans font-light text-slate-400">/&gt;</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-1 font-signature text-primary ${sizeClasses[size]} ${className}`}
    >
      <span className="font-sans font-light text-slate-400">&lt;</span>
      <span className="px-1">{greeting.logo_name}</span>
      <span className="font-sans font-light text-slate-400">/&gt;</span>
    </motion.div>
  );
};

export default Logo;
