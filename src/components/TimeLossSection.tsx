'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function TimeLossSection() {
  const timeLossProblems = [
    {
      icon: "⏰",
      title: "Diagnóstico Lento",
      description: "Técnicos pasan horas identificando problemas que la IA resuelve en minutos",
      timeLost: "4-8 horas",
      impact: "Alto"
    },
    {
      icon: "🔄",
      title: "Mantenimiento Reactivo",
      description: "Paros no planificados que interrumpen producción y cuestan miles por hora",
      timeLost: "2-24 horas",
      impact: "Crítico"
    },
    {
      icon: "📚",
      title: "Conocimiento Disperso",
      description: "Información técnica dispersa en manuales, WhatsApp y personas",
      timeLost: "1-3 horas",
      impact: "Medio"
    },
    {
      icon: "👥",
      title: "Espera por Soporte",
      description: "Técnicos esperando por ingenieros externos o fabricantes",
      timeLost: "6-48 horas",
      impact: "Alto"
    }
  ];

  return (
    <section id="time-loss" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_25%,rgba(147,51,234,0.05)_75%,transparent_75%)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              ⚠️ El Tiempo que Pierdes
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Cada Hora Perdida
              </span>
              <br />
              <span className="text-gray-200">Es Dinero Perdido</span>
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              En la industria, el tiempo es dinero. Cada paro, cada diagnóstico lento, 
              cada espera por soporte <span className="text-purple-400 font-semibold">cuesta miles de pesos</span> y 
              <span className="text-blue-400 font-semibold"> frustra a tu equipo</span>.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Time Loss Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {timeLossProblems.map((problem, index) => (
            <SlideUpAnimation key={index} delay={0.8 + index * 0.1}>
              <HoverGlowAnimation>
                <div className="group relative bg-gradient-to-br from-gray-800/40 via-gray-800/60 to-gray-900/80 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-1">
                  {/* Impact Indicator */}
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold ${
                    problem.impact === 'Crítico' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    problem.impact === 'Alto' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {problem.impact}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {problem.description}
                  </p>
                  
                  {/* Time Lost */}
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-full">
                    <span className="text-red-300 text-sm font-medium">
                      ⏰ {problem.timeLost} perdidas
                    </span>
                  </div>
                </div>
              </HoverGlowAnimation>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Cost Calculator */}
        <SlideUpAnimation delay={1.2}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 Calculadora de Costo de Tiempo Perdido
              </h3>
              <p className="text-gray-400">
                ¿Cuánto te cuesta cada hora de paro en tu planta?
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">$50,000</div>
                <div className="text-gray-400 text-sm">Por hora de paro (promedio)</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">$400,000</div>
                <div className="text-gray-400 text-sm">Por día de paro no planificado</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.4M</div>
                <div className="text-gray-400 text-sm">Por semana de ineficiencia</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <HoverGlowAnimation>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                >
                  🧮 Calcular mi Ahorro Real
                </a>
              </HoverGlowAnimation>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
