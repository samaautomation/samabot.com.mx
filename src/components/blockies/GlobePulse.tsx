'use client';

import { motion } from 'framer-motion';

interface GlobePulseProps {
  className?: string;
  strokeColor?: string;
  pulseColor?: string;
}

export function GlobePulse({ 
  className = "", 
  strokeColor = "#3B82F6",
  pulseColor = "#60A5FA"
}: GlobePulseProps) {
  return (
    <div className={className}>
      <motion.div
        className="w-full h-full rounded-full border-2"
        style={{ borderColor: strokeColor }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: pulseColor }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0.4, 0.1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  );
}
