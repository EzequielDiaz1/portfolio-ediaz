"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => (
  <section id="about" className="py-20 px-4 bg-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sobre{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">mí</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Full-Stack Developer con pasión por crear interfaces excepcionales y experiencias de usuario memorables. Especializado en React, Next.js y TypeScript, con sólidos conocimientos en back-end y arquitectura full-stack. <span className="block mt-2">Actualmente trabajo full time, pero también realizo proyectos freelance para clientes que buscan soluciones modernas y personalizadas.</span>
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Mi historia</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              Desde los 16 años he trabajado en diversos roles que fortalecieron mi capacidad de organización, responsabilidad y resolución de problemas. Estas experiencias, junto con mi pasión por el handball, me enseñaron la importancia del trabajo en equipo y la comunicación efectiva.
            </p>
            <p>
              Mi transición a la tecnología fue natural, especializándome principalmente en desarrollo Full-Stack. Me apasiona crear interfaces intuitivas y experiencias de usuario excepcionales, aunque también tengo sólidos conocimientos en back-end, bases de datos e infraestructura que me permiten tener una visión completa del desarrollo web.
            </p>
            <p>
              Como Full-Stack Developer, disfruto transformando diseños en código, optimizando performance y creando animaciones que deleiten a los usuarios. Mi enfoque está en la calidad del código, la accesibilidad y las mejores prácticas de desarrollo moderno.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
              <div className="text-gray-300">Años de experiencia</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Tecnologías</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Proyectos</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">3</div>
              <div className="text-gray-300">Empresas</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.button
        onClick={() => scrollToSection("skills")}
        className="mx-auto mt-12 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        whileHover={{ y: 5 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        aria-label="Ir a la siguiente sección"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </div>
  </section>
);

export default AboutSection; 