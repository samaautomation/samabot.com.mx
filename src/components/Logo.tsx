'use client';

import Image from 'next/image';

interface LogoProps {
  type: 'sama' | 'samabot';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ type, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const logoConfig = {
    sama: {
      src: '/logos/sama-automation-logo.png',
      alt: 'SAMA Automation Logo',
      fallback: (
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center border border-blue-500/30`}>
          <span className="text-white font-bold text-lg">S</span>
        </div>
      )
    },
    samabot: {
      src: '/logos/samabot-logo.png',
      alt: 'SAMABOT Logo',
      fallback: (
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center border border-blue-500/30`}>
          <span className="text-white font-bold text-lg">B</span>
        </div>
      )
    }
  };

  const config = logoConfig[type];

  return (
    <div className={`relative ${className}`}>
      <Image
        src={config.src}
        alt={config.alt}
        width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = '';
            // Create a temporary div to render the React element
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = `
              <div class="${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center border border-blue-500/30">
                <span class="text-white font-bold text-lg">${type === 'sama' ? 'S' : 'B'}</span>
              </div>
            `;
            parent.appendChild(tempDiv.firstElementChild!);
          }
        }}
      />
    </div>
  );
}
