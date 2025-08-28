'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';
import SamabotLogo from '@/components/SamabotLogo';

export default function FuturisticHero() {
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                NVIDIA AI Edge Computing
              </div>
            </FadeInAnimation>

            <FadeInAnimation delay={0.4}>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Control Industrial
                </span>
                <br />
                con IA Integrada
              </h1>
            </FadeInAnimation>

            <SlideUpAnimation delay={0.6}>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                SAMABOT combina <span className="text-blue-400 font-semibold">GPU de alto rendimiento</span> y 
                <span className="text-gray-200 font-semibold"> control de procesos industriales</span> en un solo gabinete. 
                Monitoreo predictivo y asistencia técnica 24/7.
              </p>
            </SlideUpAnimation>

            {/* Key Technical Features */}
            <SlideUpAnimation delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">GPU Edge Computing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Control PLC Siemens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">IA Local Sin Internet</span>
                </div>
              </div>
            </SlideUpAnimation>

            {/* CTA Buttons */}
            <SlideUpAnimation delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverGlowAnimation>
                  <a
                    href="#demo"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                  >
                    Ver Demo en Vivo
                  </a>
                </HoverGlowAnimation>
                
                <HoverGlowAnimation>
                  <a
                    href="#contact"
                    className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-bold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    Solicitar Cotización
                  </a>
                </HoverGlowAnimation>
              </div>
            </SlideUpAnimation>
          </div>

                           {/* Right Column - SAMABOT Logo & Branding */}
                 <div className="relative flex flex-col items-center justify-center">
                   <FadeInAnimation delay={1.2}>
                     <div className="text-center space-y-8">
                       {/* SAMABOT Logo */}
                       <div className="relative">
                         <SamabotLogo size="xl" className="mb-6" />
                         
                         {/* Subtle Glow Effect */}
                         <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                       </div>
                       
                       {/* Brand Tagline */}
                       <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                             Control Industrial
                           </span>
                           <br />
                           <span className="text-gray-200">con IA Integrada</span>
                         </h3>
                         
                         {/* Key Features Badges */}
                         <div className="flex flex-wrap justify-center gap-3">
                           <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                             <span className="text-blue-300 text-sm font-medium">GPU Edge</span>
                           </div>
                           <div className="px-4 py-2 bg-gray-700/30 border border-gray-600/50 rounded-full">
                             <span className="text-gray-300 text-sm font-medium">PLC Siemens</span>
                           </div>
                           <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                             <span className="text-blue-300 text-sm font-medium">IA Local</span>
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
