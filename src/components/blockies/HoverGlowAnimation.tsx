'use client';

import { motion } from 'framer-motion';

interface HoverGlowAnimationProps {
  children: React.ReactNode;
  glowColor?: string;
}

export function HoverGlowAnimation({ 
  children, 
  glowColor = "#F59E0B"
}: HoverGlowAnimationProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
