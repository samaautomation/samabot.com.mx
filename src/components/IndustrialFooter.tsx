'use client';

import { 
  FadeInAnimation, 
  SlideUpAnimation 
} from '@/components/blockies';

export default function IndustrialFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_75%,transparent_75%)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <FadeInAnimation delay={0.2}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-black text-xl font-bold">S</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">SAMA</div>
                  <div className="text-sm text-gray-400">AUTOMATIZACIÓN</div>
                </div>
              </div>
            </FadeInAnimation>

            <SlideUpAnimation delay={0.4}>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Líderes en automatización industrial con IA integrada. 
                Transformamos procesos industriales con tecnología de punta 
                y soporte local en México.
              </p>
            </SlideUpAnimation>

            <SlideUpAnimation delay={0.6}>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/526251110453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <span className="text-white text-lg">💬</span>
                </a>
                <a
                  href="mailto:ventas@samaautomation.com"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <span className="text-white text-lg">📧</span>
                </a>
                <a
                  href="tel:+526251110453"
                  className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <span className="text-white text-lg">📞</span>
                </a>
              </div>
            </SlideUpAnimation>
          </div>

          {/* Quick Links */}
          <div>
            <SlideUpAnimation delay={0.8}>
              <h3 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#demo" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    🚀 Demo Gratuita
                  </a>
                </li>
                <li>
                  <a href="#casos-uso" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    🎯 Casos de Uso
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    🤖 Tecnología IA
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    📞 Contacto
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    📰 Blog Técnico
                  </a>
                </li>
              </ul>
            </SlideUpAnimation>
          </div>

          {/* Contact Info */}
          <div>
            <SlideUpAnimation delay={1.0}>
              <h3 className="text-lg font-bold text-white mb-6">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Cuauhtémoc, Chihuahua</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>+52 (625) 111 0453</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>ventas@samaautomation.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Lun-Vie 9:00-18:00</span>
                </li>
              </ul>
            </SlideUpAnimation>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <SlideUpAnimation delay={1.2}>
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} SAMA Automation. Todos los derechos reservados.
              </div>
            </SlideUpAnimation>

            <SlideUpAnimation delay={1.4}>
              <div className="flex space-x-6 text-sm">
                <a href="#privacidad" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Política de Privacidad
                </a>
                <a href="#terminos" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Términos de Servicio
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Cookies
                </a>
              </div>
            </SlideUpAnimation>
          </div>
        </div>

        {/* Trust Badges */}
        <SlideUpAnimation delay={1.6}>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="text-center">
              <div className="inline-flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">🔒</span>
                  <span>SSL Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">🏭</span>
                  <span>Estándares Industriales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">🇲🇽</span>
                  <span>Hecho en México</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400">🤖</span>
                  <span>IA Local</span>
                </div>
              </div>
            </div>
          </div>
        </SlideUpAnimation>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <FadeInAnimation delay={2.0}>
          <a
            href="https://wa.me/526251110453?text=Hola,%20me%20interesa%20SAMABOT%20para%20mi%20empresa%20industrial"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-110"
          >
            <span className="text-white text-2xl">💬</span>
          </a>
        </FadeInAnimation>
      </div>
    </footer>
  );
}
