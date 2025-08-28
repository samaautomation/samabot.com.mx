'use client';

import { FadeInAnimation, SlideUpAnimation } from '@/components/blockies';
import Logo from '@/components/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo SAMA Automation */}
          <FadeInAnimation delay={0.2}>
            <div className="flex items-center space-x-3">
              <Logo type="sama" size="sm" />
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">SAMA Automation</div>
                <div className="text-blue-400 text-xs">Industrial AI Solutions</div>
              </div>
            </div>
          </FadeInAnimation>

          {/* Navigation */}
          <SlideUpAnimation delay={0.4}>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Inicio
              </a>
              <a href="#tech" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Tecnología
              </a>
              <a href="#cases" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Casos de Uso
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                Contacto
              </a>
            </nav>
          </SlideUpAnimation>

          {/* CTA Button */}
          <SlideUpAnimation delay={0.6}>
            <a
              href="#demo"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 border border-blue-500/30"
            >
              🎬 Demo
            </a>
          </SlideUpAnimation>
        </div>
      </div>
    </header>
  );
}
