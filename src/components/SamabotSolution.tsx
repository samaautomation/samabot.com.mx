'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function SamabotSolution() {
  const systemComponents = [
    {
      icon: "🔌",
      title: "PLC Siemens S7-1214",
      description: "Control industrial robusto y expandible",
      specs: "16 DI, 16 DO, 4 AI, 4 AO"
    },
    {
      icon: "📱",
      title: "HMI Wecon 10\"",
      description: "Interfaz táctil intuitiva y resistente",
      specs: "Pantalla táctil industrial"
    },
    {
      icon: "🤖",
      title: "NVIDIA Jetson Orin NX",
      description: "IA local en el borde sin internet",
      specs: "8GB RAM, 32GB eMMC"
    },
    {
      icon: "🌐",
      title: "Módulo de Comunicación",
      description: "Integración con sistemas existentes",
      specs: "Ethernet, Wi-Fi, 4G opcional"
    }
  ];

  const useModes = [
    {
      icon: "⚙️",
      title: "Operación",
      description: "Alarmas, setpoints, indicadores de proceso en tiempo real",
      color: "blue"
    },
    {
      icon: "🔧",
      title: "Mantenimiento",
      description: "Checklist inteligente con piezas, herramientas y tiempos estimados",
      color: "yellow"
    },
    {
      icon: "📊",
      title: "Historial",
      description: "Últimas 10 fallas con solución y tiempo-a-reparación (TTR)",
      color: "green"
    },
    {
      icon: "💬",
      title: "Chat Técnico",
      description: "Asistente IA que explica conceptos y genera recomendaciones",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_75%,transparent_75%)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              🚀 Solución SAMABOT
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              El{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                gabinete industrial
              </span>
              <br />
              que lo resuelve todo
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
                          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                SAMABOT es un sistema <span className="text-yellow-400 font-semibold">&quot;todo-en-uno&quot;</span> que combina 
                control industrial, visualización e inteligencia artificial en un solo gabinete.
              </p>
          </SlideUpAnimation>
        </div>

        {/* System Architecture */}
        <div className="mb-20">
          <SlideUpAnimation delay={0.8}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              🏗️ Arquitectura del Sistema
            </h3>
          </SlideUpAnimation>

          <div className="grid lg:grid-cols-4 gap-6">
            {systemComponents.map((component, index) => (
              <SlideUpAnimation key={index} delay={1.0 + index * 0.1}>
                <HoverGlowAnimation>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{component.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {component.title}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {component.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <span className="text-blue-400 text-sm font-medium">
                        {component.specs}
                      </span>
                    </div>
                  </div>
                </HoverGlowAnimation>
              </SlideUpAnimation>
            ))}
          </div>
        </div>

        {/* Use Modes */}
        <div className="mb-20">
          <SlideUpAnimation delay={1.2}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              🎯 Modos de Uso
            </h3>
          </SlideUpAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useModes.map((mode, index) => (
              <SlideUpAnimation key={index} delay={1.4 + index * 0.1}>
                <HoverGlowAnimation>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
                    <div className="text-4xl mb-4">{mode.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {mode.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                </HoverGlowAnimation>
              </SlideUpAnimation>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <SlideUpAnimation delay={1.6}>
          <div className="bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  ✨ ¿Por qué SAMABOT es diferente?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>IA local que funciona sin internet</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Integración perfecta con sistemas existentes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Reducción del 80% en tiempo de reparación</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>ROI positivo en menos de 6 meses</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <HoverGlowAnimation>
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-lg font-bold hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
                  >
                    🎬 Ver Demo en Vivo
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
