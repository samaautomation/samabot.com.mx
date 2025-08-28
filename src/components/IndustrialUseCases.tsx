'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function IndustrialUseCases() {
  const useCases = [
    {
      icon: "🔥",
      title: "Plasma CNC / Corte",
      description: "Control de antorcha (THC), monitoreo de altura, corrientes y calidad de corte",
      features: ["Control THC", "Monitoreo altura", "Diagnóstico antorcha"],
      color: "red",
      image: "plasma-cnc"
    },
    {
      icon: "⚖️",
      title: "Dosificación / Bandas",
      description: "Lectura de nivel radar VEGA, control PID de compuertas hidráulicas",
      features: ["Control PID", "Lectura radar", "Velocidad constante"],
      color: "blue",
      image: "dosificacion"
    },
    {
      icon: "🔌",
      title: "Soldadura",
      description: "Monitoreo de parámetros, calidad y tiempos de ciclo con alarmas de variación",
      features: ["Monitoreo corriente", "Calidad soldadura", "Alarmas variación"],
      color: "yellow",
      image: "soldadura"
    },
    {
      icon: "🌱",
      title: "Agro / Agua",
      description: "Bombeo, riego, invernaderos con registro de eventos y mantenimiento preventivo",
      features: ["Control bombeo", "Riego automático", "Mantenimiento preventivo"],
      color: "green",
      image: "agro"
    },
    {
      icon: "📦",
      title: "Empaque / Llenado",
      description: "Detección temprana de atascos, fallas de sensor y variaciones de caudal",
      features: ["Detección atascos", "Monitoreo sensores", "Control caudal"],
      color: "purple",
      image: "empaque"
    },
    {
      icon: "🏭",
      title: "Metalurgia",
      description: "Control de hornos, monitoreo de temperatura y procesos de fundición",
      features: ["Control hornos", "Monitoreo temperatura", "Procesos fundición"],
      color: "orange",
      image: "metalurgia"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "from-red-500/10 to-red-600/10 border-red-500/20 text-red-400",
      blue: "from-blue-500/10 to-blue-600/10 border-blue-500/20 text-blue-400",
      yellow: "from-yellow-500/10 to-yellow-600/10 border-yellow-500/20 text-yellow-400",
      green: "from-green-500/10 to-green-600/10 border-green-500/20 text-green-400",
      purple: "from-purple-500/10 to-purple-600/10 border-purple-500/20 text-purple-400",
      orange: "from-orange-500/10 to-orange-600/10 border-orange-500/20 text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.1)_25%,rgba(245,158,11,0.1)_75%,transparent_75%)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              🎯 Casos de Uso
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              SAMABOT funciona en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">
                cualquier industria
              </span>
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Desde <span className="text-yellow-400 font-semibold">plasma CNC</span> hasta 
              <span className="text-blue-400 font-semibold"> invernaderos inteligentes</span>. 
              SAMABOT se adapta a tu proceso específico.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <SlideUpAnimation key={index} delay={0.8 + index * 0.1}>
              <HoverGlowAnimation>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 group h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(useCase.color)}`}>
                      {useCase.title.split(' ')[0]}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <HoverGlowAnimation>
                      <a
                        href={`#${useCase.image}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-sm font-medium hover:from-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300"
                      >
                        Ver Detalles →
                      </a>
                    </HoverGlowAnimation>
                  </div>
                </div>
              </HoverGlowAnimation>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Industry Stats */}
        <SlideUpAnimation delay={1.4}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              📊 SAMABOT en Números
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">6+</div>
                <div className="text-gray-400">Industrias atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400">Máquinas controladas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-400">Reducción TTR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoreo continuo</div>
              </div>
            </div>

            <div className="mt-8">
              <HoverGlowAnimation>
                <a
                  href="#industries"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                >
                  🏭 Ver Todas las Industrias
                </a>
              </HoverGlowAnimation>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
