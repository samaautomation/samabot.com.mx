'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function UseCasesGrid() {
  const useCases = [
    {
      icon: "🔥",
      title: "Plasma CNC",
      category: "Metalurgia",
      description: "Control THC y monitoreo de calidad de corte",
      metrics: "99.5% Precisión"
    },
    {
      icon: "⚖️",
      title: "Dosificación",
      category: "Procesos",
      description: "Control PID y lectura de nivel radar",
      metrics: "±0.1% Error"
    },
    {
      icon: "🔌",
      title: "Soldadura",
      category: "Manufactura",
      description: "Monitoreo de parámetros y calidad",
      metrics: "24/7 Monitoreo"
    },
    {
      icon: "🌱",
      title: "Agro",
      category: "Agricultura",
      description: "Control de riego y mantenimiento preventivo",
      metrics: "30% Ahorro"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_75%,transparent_75%)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              🎯 Aplicaciones Industriales
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-200">
                Soluciones
              </span>
              <br />
              para Cualquier Industria
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SAMABOT se adapta a tu proceso específico con 
              <span className="text-blue-400 font-semibold"> control de procesos avanzado</span> y 
              <span className="text-gray-200 font-semibold"> IA predictiva</span>.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {useCases.map((useCase, index) => (
            <SlideUpAnimation key={index} delay={0.8 + index * 0.1}>
              <HoverGlowAnimation>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-medium text-blue-400">
                      {useCase.category}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full">
                      <span className="text-gray-300 text-sm font-medium">
                        {useCase.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverGlowAnimation>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Technical Specifications */}
        <SlideUpAnimation delay={1.2}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚀 Especificaciones Técnicas
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>GPU NVIDIA para procesamiento de IA</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>PLC Siemens S7-1200/1500</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>HMI Wecon 10&quot; táctil</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Comunicación OPC UA / MQTT</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <HoverGlowAnimation>
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                  >
                    🎬 Solicitar Demo
                  </a>
                </HoverGlowAnimation>
              </div>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
