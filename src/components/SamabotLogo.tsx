'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SamabotLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export default function SamabotLogo({ size = 'lg', className = '', animated = true }: SamabotLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const LogoComponent = (
    <div className={`relative ${className}`}>
      <Image
        src="/logos/samabot-logo.png"
        alt="SAMABOT - Control Industrial con IA Integrada"
        width={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 192}
        height={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 192}
        className={`${sizeClasses[size]} object-contain drop-shadow-2xl`}
        priority
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="${sizeClasses[size]} bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-4xl mb-2">🤖</div>
                  <div class="text-white font-bold text-lg">SAMABOT</div>
                  <div class="text-blue-400 text-xs">IA Industrial</div>
                </div>
              </div>
            `;
          }
        }}
      />
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="inline-block"
      >
        {LogoComponent}
      </motion.div>
    );
  }

  return LogoComponent;
}
