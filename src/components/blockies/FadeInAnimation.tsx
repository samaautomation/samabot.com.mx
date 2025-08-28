'use client';

import { motion } from 'framer-motion';

interface FadeInAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeInAnimation({ 
  children, 
  delay = 0, 
  duration = 0.6 
}: FadeInAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
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
