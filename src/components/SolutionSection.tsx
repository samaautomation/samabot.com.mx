'use client';

import { motion } from 'framer-motion';
import { Cpu, Monitor, Brain, Shield, Settings, Clock, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionSectionProps {
  className?: string;
}

export function SolutionSection({ className }: SolutionSectionProps) {
  const components = [
    {
      icon: Cpu,
      title: "PLC Siemens S7-1214",
      description: "Control industrial robusto y confiable",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Monitor,
      title: "HMI Wecon 10&quot;",
      description: "Interfaz táctil intuitiva y responsive",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "NVIDIA Jetson Orin NX",
      description: "IA local para análisis en tiempo real",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Settings,
      title: "I/O Expandible",
      description: "16 DI + 16 DO + 8 AI/AO",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const modes = [
    {
      icon: Clock,
      title: "Modo Operación",
      description: "Alarmas, setpoints e indicadores de proceso en tiempo real",
      features: ["Control de proceso", "Monitoreo continuo", "Alertas inteligentes"]
    },
    {
      icon: Settings,
      title: "Modo Mantenimiento",
      description: "Checklist inteligente con piezas, herramientas y procedimientos",
      features: ["Pasos detallados", "Lista de materiales", "Tiempos estimados"]
    },
    {
      icon: MessageSquare,
      title: "Historial Inteligente",
      description: "Últimas 10 fallas con solución y tiempo de reparación (TTR)",
      features: ["Causas identificadas", "Soluciones aplicadas"]
    },
    {
      icon: Brain,
      title: "Chat Técnico",
      description: "Asistente IA que explica conceptos y genera recomendaciones",
      features: ["Diagnóstico guiado", "Explicaciones claras"]
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
    <section className={cn("py-20 px-6 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-yellow-400/20" />
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
            ¿Qué es <span className="text-yellow-400">SAMABOT</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            SAMABOT es un gabinete industrial &quot;todo-en-uno&quot; que combina PLC Siemens, HMI y un módulo de IA en el borde (edge) con NVIDIA Jetson. 
            Monitorea señales, aprende del comportamiento de la máquina, guía al operador con pasos claros y reduce drásticamente el tiempo de paro.
          </p>
        </motion.div>

        {/* Arquitectura del Sistema */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Arquitectura del Sistema
          </h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {components.map((component, index) => (
              <motion.div 
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative bg-black/50 border border-gray-800 rounded-xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 text-center">
                    <div className={cn(
                      "w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-4 shadow-lg mx-auto",
                      component.color
                    )}>
                      <component.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">
                      {component.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Modos de uso */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {modes.map((mode, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-black/50 border border-gray-800 rounded-xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <mode.icon className="w-8 h-8 text-black" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {mode.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {mode.description}
                  </p>

                  <ul className="space-y-2">
                    {mode.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Funcionalidad offline */}
        <motion.div 
          className="mt-16 text-center p-8 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">
              Funciona sin internet
            </h3>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            La IA corre localmente en el Jetson. Internet es opcional solo para reportes o acceso remoto. 
            <span className="text-yellow-400 font-bold"> Privacidad y latencia mínima garantizadas.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
