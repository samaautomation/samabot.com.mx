'use client';

import { motion } from 'framer-motion';

interface SlideUpAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideUpAnimation({ 
  children, 
  delay = 0, 
  duration = 0.6,
  distance = 30
}: SlideUpAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
