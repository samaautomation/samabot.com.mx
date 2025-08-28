'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';
import SamabotLogo from '@/components/SamabotLogo';

export default function RecoveryHero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.03)_50%)] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(59,130,246,0.03)_50%)] bg-[size:100px_100px]"></div>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <FadeInAnimation delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                IA Industrial Avanzada
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200">
                  Recupera el Tiempo
                </span>
                <br />
                <span className="text-gray-200">de tu Equipo</span>
              </h1>
            </FadeInAnimation>

            <SlideUpAnimation delay={0.6}>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                SAMABOT libera a tus <span className="text-blue-400 font-semibold">ingenieros y técnicos</span> de 
                tareas repetitivas, permitiéndoles enfocarse en 
                <span className="text-purple-400 font-semibold"> innovación y crecimiento</span>.
              </p>
            </SlideUpAnimation>

            {/* Time Recovery Metrics */}
            <SlideUpAnimation delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">80% menos tiempo en diagnóstico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">24/7 monitoreo automático</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">IA que aprende y mejora</span>
                </div>
              </div>
            </SlideUpAnimation>

            {/* CTA Buttons */}
            <SlideUpAnimation delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverGlowAnimation>
                  <a
                    href="#demo"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-lg text-lg font-bold hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                  >
                    🚀 Ver Demo en Vivo
                  </a>
                </HoverGlowAnimation>
                
                <HoverGlowAnimation>
                  <a
                    href="#contact"
                    className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-bold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    💰 Calcular Ahorro de Tiempo
                  </a>
                </HoverGlowAnimation>
              </div>
            </SlideUpAnimation>
          </div>

          {/* Right Column - SAMABOT Logo & Time Recovery Visualization */}
          <div className="relative flex flex-col items-center justify-center">
            <FadeInAnimation delay={1.2}>
              <div className="text-center space-y-8">
                {/* SAMABOT Logo */}
                <div className="relative">
                  <SamabotLogo size="xl" className="mb-6" />
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-400/20 rounded-full blur-3xl -z-10"></div>
                </div>
                
                {/* Time Recovery Visualization */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Tiempo Recuperado
                    </span>
                  </h3>
                  
                  {/* Time Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">80%</div>
                      <div className="text-gray-400 text-xs">Menos tiempo en reparaciones</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                      <div className="text-gray-400 text-xs">Monitoreo automático</div>
                    </div>
                  </div>
                  
                  {/* Key Features Badges */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-full">
                      <span className="text-blue-300 text-sm font-medium">Diagnóstico IA</span>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-full">
                      <span className="text-purple-300 text-sm font-medium">Predicción</span>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-full">
                      <span className="text-blue-300 text-sm font-medium">Automatización</span>
                    </div>
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
