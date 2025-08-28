'use client';

import { motion } from 'framer-motion';
import { Cpu, Download, Calendar, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedHeroProps {
  className?: string;
}

export function AnimatedHero({ className }: AnimatedHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const badgeVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className={cn(
      "min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-950 via-black to-black relative overflow-hidden",
      className
    )}>
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl" />
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge animado */}
        <motion.div 
          className="mb-8"
          variants={badgeVariants}
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Cpu className="w-4 h-4 mr-2" />
            Gabinete de control con IA integrada
          </div>
        </motion.div>
        
        {/* Título principal con animación */}
        <motion.h1 
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          variants={itemVariants}
        >
          <span className="text-white">Pon a un ingeniero experto dentro de tu </span>
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">máquina</span>
        </motion.h1>
        
        {/* Descripción con animación */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed font-medium"
          variants={itemVariants}
        >
          SAMABOT combina <span className="text-yellow-400 font-semibold">PLC + HMI + IA local</span> para reducir paros, 
          estandarizar mantenimiento y entrenar a tu equipo.
        </motion.p>

        {/* Bullets con animación */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-300">IA en el borde: funciona sin internet</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Predicción y diagnóstico de fallas</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Guías paso a paso para mantenimiento</span>
          </div>
        </motion.div>
        
        {/* Botones con animación */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#demo"
            className="px-8 py-4 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Calendar className="w-5 h-5" />
            Agendar Demo
          </motion.a>
          <motion.a
            href="#ficha"
            className="px-8 py-4 border-2 border-white/20 text-white rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Download className="w-5 h-5" />
            Ficha Técnica PDF
          </motion.a>
          <motion.a
            href="#cotizar"
            className="px-8 py-4 border-2 border-white/20 text-white rounded-full text-lg font-semibold hover:bg-white/10 backdrop-blur-sm flex items-center gap-2"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <DollarSign className="w-5 h-5" />
            Cotizar
          </motion.a>
        </motion.div>

        {/* Trust note */}
        <motion.div 
          className="mt-12 text-gray-400 text-sm"
          variants={itemVariants}
        >
          Diseñado por <span className="text-yellow-400 font-semibold">SAMA Automation</span> (Chihuahua, MX). Estándares industriales.
        </motion.div>
      </motion.div>
    </section>
  );
}


