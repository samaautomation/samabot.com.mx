'use client';

import { motion } from 'framer-motion';
import { Shield, BarChart3, Cog, Zap, Server, Globe, Wifi, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedBenefitsProps {
  className?: string;
}

export function AnimatedBenefits({ className }: AnimatedBenefitsProps) {
  const benefits = [
    {
      icon: Shield,
      title: "Seguridad Industrial",
      description: "Protección avanzada para sistemas críticos con monitoreo 24/7",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Analytics en Tiempo Real",
      description: "Datos instantáneos para toma de decisiones inteligentes",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cog,
      title: "Automatización Inteligente",
      description: "Control automático basado en IA para máxima eficiencia",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Procesamiento ultrarrápido para aplicaciones industriales exigentes",
      color: "from-yellow-500 to-orange-600"
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
    <section className={cn("py-20 px-6 bg-gray-900 relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-blue-400/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Beneficios Clave
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Descubre por qué Samabot es la <span className="text-yellow-400 font-semibold">solución preferida</span> para la industria moderna
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Card background with gradient border */}
              <div className="relative bg-black/50 border border-gray-800 rounded-xl p-6 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon container */}
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 shadow-lg",
                    benefit.color
                  )}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm font-medium group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Floating elements */}
                <motion.div 
                  className="absolute top-2 right-2 opacity-20"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <Server className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech icons */}
        <motion.div 
          className="absolute top-1/4 right-10 opacity-10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe className="w-12 h-12 text-blue-400" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-10 opacity-10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wifi className="w-12 h-12 text-green-400" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 opacity-10"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-10 h-10 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}


