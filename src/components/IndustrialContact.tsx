'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation, 
  HoverGlowAnimation 
} from '@/components/blockies';

export default function IndustrialContact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_75%,transparent_75%)] bg-[size:70px_70px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInAnimation delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              🚀 ¡Comienza Hoy!
            </div>
          </FadeInAnimation>

          <FadeInAnimation delay={0.4}>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              ¿Listo para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                revolucionar
              </span>
              <br />
              tu operación?
            </h2>
          </FadeInAnimation>

          <SlideUpAnimation delay={0.6}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Agenda una demo en 30 minutos con un ingeniero de SAMA Automation. 
              <span className="text-yellow-400 font-semibold"> Sin compromiso, solo resultados</span>.
            </p>
          </SlideUpAnimation>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <SlideUpAnimation delay={0.8}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                📞 Solicita tu Demo Gratuita
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="Nombre de tu empresa"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="+52 (625) XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Industria *
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors">
                    <option value="">Selecciona tu industria</option>
                    <option value="metalurgia">Metalurgia</option>
                    <option value="plasma-cnc">Plasma CNC / Corte</option>
                    <option value="soldadura">Soldadura</option>
                    <option value="agro">Agro / Agua</option>
                    <option value="empaque">Empaque / Llenado</option>
                    <option value="otra">Otra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    ¿Qué problema quieres resolver? *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Describe tu desafío industrial..."
                    required
                  ></textarea>
                </div>

                <HoverGlowAnimation>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg text-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Agendar Demo Gratuita
                  </button>
                </HoverGlowAnimation>
              </form>
            </div>
          </SlideUpAnimation>

          {/* Right Column - Contact Info & CTAs */}
          <SlideUpAnimation delay={1.0}>
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  🏢 SAMA Automation
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    <span>Cuauhtémoc, Chihuahua, México</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                    <span>+52 (625) 111 0453</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                    <span>ventas@samaautomation.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
                    <span>Lun-Vie 9:00-18:00 (MT)</span>
                  </div>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="space-y-4">
                <HoverGlowAnimation>
                  <a
                    href="#ficha-tecnica"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-white rounded-lg text-center font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                  >
                    📋 Descargar Ficha Técnica (PDF)
                  </a>
                </HoverGlowAnimation>

                <HoverGlowAnimation>
                  <a
                    href="#cotizacion"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 border border-blue-500 text-white rounded-lg text-center font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                  >
                    💰 Solicitar Cotización
                  </a>
                </HoverGlowAnimation>

                <HoverGlowAnimation>
                  <a
                    href="https://wa.me/526251110453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 border border-green-500 text-white rounded-lg text-center font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300"
                  >
                    💬 WhatsApp Directo
                  </a>
                </HoverGlowAnimation>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Garantía de Satisfacción
                </h4>
                <p className="text-gray-300 text-sm">
                  Si no estás satisfecho con SAMABOT en los primeros 30 días, 
                  te devolvemos tu inversión. Sin preguntas.
                </p>
              </div>
            </div>
          </SlideUpAnimation>
        </div>

        {/* Final CTA */}
        <SlideUpAnimation delay={1.2}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎯 ¿Aún tienes dudas?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Nuestros ingenieros están listos para responder todas tus preguntas. 
                Agenda una llamada de 15 minutos sin compromiso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverGlowAnimation>
                  <a
                    href="#llamada-15min"
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                  >
                    📞 Llamada de 15 Min
                  </a>
                </HoverGlowAnimation>
                
                <HoverGlowAnimation>
                  <a
                    href="#preguntas-frecuentes"
                    className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-bold hover:bg-blue-400 hover:text-black transition-all duration-300"
                  >
                    ❓ Ver FAQs
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
