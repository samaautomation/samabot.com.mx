'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function TechnicalOverview() {
  const technicalFeatures = [
    {
      icon: "🤖",
      title: "IA Edge Computing",
      description: "Procesamiento local con GPU de alto rendimiento para análisis en tiempo real",
      specs: "NVIDIA AI Platform"
    },
    {
      icon: "⚡",
      title: "Control Industrial",
      description: "PLC Siemens S7 con HMI táctil y monitoreo de procesos",
      specs: "16 DI/DO, 4 AI/AO"
    },
    {
      icon: "🔍",
      title: "Monitoreo Predictivo",
      description: "Detección temprana de anomalías y mantenimiento preventivo",
      specs: "99.9% Precisión"
    },
    {
      icon: "🌐",
      title: "Operación Offline",
      description: "Funciona sin internet, datos procesados localmente",
      specs: "Zero Latency"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_75%,transparent_75%)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-gray-700/20 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-6">
              🏭 Tecnología Industrial
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-400">
                Control de Procesos
              </span>
              <br />
              con Inteligencia Artificial
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SAMABOT integra <span className="text-blue-400 font-semibold">GPU de alto rendimiento</span> y 
              <span className="text-gray-200 font-semibold"> control industrial avanzado</span> para 
              optimizar procesos y reducir costos operativos.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Technical Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalFeatures.map((feature, index) => (
            <SlideUpAnimation key={index} delay={0.8 + index * 0.1}>
              <HoverGlowAnimation>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <span className="text-blue-400 text-sm font-medium">
                      {feature.specs}
                    </span>
                  </div>
                </div>
              </HoverGlowAnimation>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Process Control Diagram */}
        <SlideUpAnimation delay={1.2}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              🏗️ Arquitectura del Sistema
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Sensing Layer */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📡</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Sensado</h4>
                <p className="text-gray-400 text-sm">
                  Sensores de temperatura, presión, flujo y vibración
                </p>
              </div>

              {/* Control Layer */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Control</h4>
                <p className="text-gray-400 text-sm">
                  PLC Siemens S7 con lógica de control avanzada
                </p>
                
                {/* Connection Lines */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-500/30"></div>
                <div className="absolute top-8 right-1/2 transform translate-x-1/2 w-0.5 h-8 bg-blue-500/30"></div>
              </div>

              {/* AI Layer */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Inteligencia</h4>
                <p className="text-gray-400 text-sm">
                  GPU NVIDIA para análisis predictivo y asistencia IA
                </p>
              </div>
            </div>

            {/* Data Flow Visualization */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <span className="text-blue-400 text-sm font-mono">Data Flow → Real-time Analysis → Predictive Insights</span>
              </div>
            </div>
          </div>
        </SlideUpAnimation>

        {/* Key Benefits */}
        <SlideUpAnimation delay={1.4}>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-gray-400">Reducción en tiempo de reparación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">24/7</div>
              <div className="text-gray-400">Monitoreo continuo sin interrupciones</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Precisión en detección de anomalías</div>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
