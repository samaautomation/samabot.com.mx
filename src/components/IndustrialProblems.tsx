'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function IndustrialProblems() {
  const problems = [
    {
      icon: "⚡",
      title: "Paros No Planeados",
      description: "Costos de producción y reputación en riesgo por fallas inesperadas",
      impact: "Pérdidas de $50K+ por hora"
    },
    {
      icon: "📱",
      title: "Conocimiento Disperso",
      description: "Información técnica en WhatsApp, manuales y personas",
      impact: "Tiempo de respuesta 2-4 horas"
    },
    {
      icon: "⏰",
      title: "Esperas por Soporte",
      description: "Dependencia de técnicos externos y tiempos de respuesta largos",
      impact: "Downtime promedio 8-12 horas"
    },
    {
      icon: "📋",
      title: "Falta de Estandarización",
      description: "Procedimientos no documentados y auditorías complejas",
      impact: "Inconsistencia en mantenimiento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.1)_25%,rgba(245,158,11,0.1)_75%,transparent_75%)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              🚨 Problemas Críticos
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              ¿Tu planta sufre de estos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                problemas?
              </span>
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estos desafíos cuestan millones a las empresas industriales. 
              <span className="text-yellow-400 font-semibold"> SAMABOT los resuelve todos</span>.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <SlideUpAnimation key={index} delay={0.8 + index * 0.1}>
              <HoverGlowAnimation>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                    <span className="text-red-400 text-sm font-medium">
                      {problem.impact}
                    </span>
                  </div>
                </div>
              </HoverGlowAnimation>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Cost Calculator */}
        <SlideUpAnimation delay={1.2}>
          <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              💰 Calculadora de Costos de Paro
            </h3>
            <p className="text-gray-300 mb-6">
              ¿Sabes cuánto te cuesta cada hora de paro no planeado?
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$50K+</div>
                <div className="text-gray-400 text-sm">Por hora de paro</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-red-400 mb-2">8-12h</div>
                <div className="text-gray-400 text-sm">Tiempo promedio de reparación</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">$400K+</div>
                <div className="text-gray-400 text-sm">Pérdida mensual por paros</div>
              </div>
            </div>

            <HoverGlowAnimation>
              <a
                href="#roi-calculator"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-400 hover:to-red-500 transition-all duration-300"
              >
                🧮 Calcular mi ROI
              </a>
            </HoverGlowAnimation>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
