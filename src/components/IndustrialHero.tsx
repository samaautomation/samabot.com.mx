'use client';

import { motion } from 'framer-motion';
import { 
  GlobePulse, 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function IndustrialHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background Industrial Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32">
          <GlobePulse 
            strokeColor="#F59E0B"
            pulseColor="#F59E0B"
          />
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24">
          <GlobePulse 
            strokeColor="#3B82F6"
            pulseColor="#3B82F6"
          />
        </div>
        {/* Industrial Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <FadeInAnimation delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                IA Industrial en el Borde
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">
                  IA industrial
                </span>
                <br />
                que vive en tu máquina
              </h1>
            </FadeInAnimation>

            <SlideUpAnimation delay={0.6}>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                SAMABOT combina <span className="text-yellow-400 font-semibold">PLC + HMI + IA local</span> para reducir paros, 
                estandarizar mantenimiento y entrenar a tu equipo. 
                <span className="text-blue-400 font-semibold"> Funciona sin internet</span>.
              </p>
            </SlideUpAnimation>

            {/* Key Benefits */}
            <SlideUpAnimation delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Diagnóstico guiado en 3 clics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Checklist con piezas y herramientas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Historial de fallas paso a paso</span>
                </div>
              </div>
            </SlideUpAnimation>

            {/* CTA Buttons */}
            <SlideUpAnimation delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverGlowAnimation>
                  <a
                    href="#demo"
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg text-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105"
                  >
                    🚀 Agendar Demo
                  </a>
                </HoverGlowAnimation>
                
                <HoverGlowAnimation>
                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg text-lg font-bold hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    📋 Descargar Ficha Técnica
                  </a>
                </HoverGlowAnimation>
              </div>
            </SlideUpAnimation>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <FadeInAnimation delay={1.2}>
              <div className="relative">
                {/* Main Cabinet Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_75%,transparent_75%)] bg-[size:20px_20px]"></div>
                  
                  {/* Industrial Components */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-blue-600 rounded-lg border border-blue-400"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-500 rounded-lg border border-yellow-400"></div>
                  <div className="absolute bottom-8 left-8 w-20 h-12 bg-gray-700 rounded-lg border border-gray-600"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-500 rounded-lg border border-blue-400"></div>
                  
                  {/* Central HMI Display */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-black rounded-lg border-2 border-yellow-400">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black rounded-lg p-2">
                      <div className="text-yellow-400 text-xs font-mono text-center">SAMABOT</div>
                      <div className="text-blue-400 text-xs font-mono text-center mt-1">HMI v1.1</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">100%</div>
                    <div className="text-xs text-gray-400">Funciona offline</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-gray-400">Monitoreo</div>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
