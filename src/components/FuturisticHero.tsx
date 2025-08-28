'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function FuturisticHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.03)_50%)] bg-[size:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_50%,rgba(59,130,246,0.03)_50%)] bg-[size:100px_100px]"></div>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
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

          {/* Right Column - SAMABOT Visualization */}
          <div className="relative">
            <FadeInAnimation delay={1.2}>
              <div className="relative">
                {/* Main Cabinet Visualization */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 relative overflow-hidden">
                  {/* Futuristic Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_75%,transparent_75%)] bg-[size:30px_30px]"></div>
                  
                  {/* AI Interface Display */}
                  <div className="absolute top-8 left-8 right-8 h-32 bg-black rounded-lg border border-blue-500/30 p-4">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-black rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-blue-400 text-lg font-mono mb-2">SAMA AI</div>
                        <div className="text-gray-400 text-xs font-mono">System Nominal</div>
                        <div className="flex justify-center mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Components */}
                  <div className="absolute bottom-8 left-8 w-20 h-16 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center">
                    <div className="text-blue-400 text-xs font-mono text-center">PLC</div>
                  </div>
                  
                  <div className="absolute bottom-8 left-32 w-20 h-16 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center">
                    <div className="text-blue-400 text-xs font-mono text-center">GPU</div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 w-20 h-16 bg-gray-700 rounded-lg border border-gray-600 flex items-center justify-center">
                    <div className="text-blue-400 text-xs font-mono text-center">HMI</div>
                  </div>

                  {/* Data Flow Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 120 280 Q 200 250 280 280"
                      stroke="rgba(59,130,246,0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 280 280 Q 360 250 440 280"
                      stroke="rgba(59,130,246,0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>

                {/* Floating Tech Specs */}
                <div className="absolute -top-4 -right-4 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-gray-400">Monitoreo IA</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-300">99.9%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
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
