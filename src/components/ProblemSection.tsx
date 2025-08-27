'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, FileText, Settings, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProblemSectionProps {
  className?: string;
}

export function ProblemSection({ className }: ProblemSectionProps) {
  const problems = [
    {
      icon: TrendingDown,
      title: "Paros no planeados",
      description: "Que cuestan producción, reputación y dinero sin previo aviso",
      tag: "Hasta 50% pérdida de productividad",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FileText,
      title: "Conocimiento disperso",
      description: "Información técnica repartida en WhatsApp, manuales y cabezas de personas",
      tag: "Tiempo perdido buscando soluciones",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Esperas por soporte externo",
      description: "Dependencia de técnicos externos para resolver problemas básicos",
      tag: "Horas o días de paro",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Settings,
      title: "Falta de estandarización",
      description: "Sin procedimientos claros ni trazabilidad en mantenimiento",
      tag: "Problemas recurrentes",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section className={cn("py-20 px-6 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-transparent to-blue-400/20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge de problema */}
          <div className="inline-flex items-center px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs font-medium mb-6">
            <AlertTriangle className="w-3 h-3 mr-2" />
            Problemas comunes en la industria
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Estos son los dolores de cabeza más comunes que enfrentan las empresas industriales todos los días.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Card background */}
              <div className="relative bg-black/50 border border-gray-800 rounded-xl p-8 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container */}
                <div className="relative z-10">
                  <div className={cn(
                    "w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-6 shadow-lg",
                    problem.color
                  )}>
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {problem.description}
                  </p>

                  {/* Tag */}
                  <div className="inline-flex px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                    {problem.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Costo del downtime */}
        <motion.div 
          className="mt-16 text-center p-8 bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            El costo real del downtime
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Una hora de paro puede costar entre <span className="text-red-400 font-bold">$5,000 y $50,000 pesos</span> dependiendo del proceso. 
            SAMABOT ayuda a reducir estos paros hasta en un <span className="text-yellow-400 font-bold">70%</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
