"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, ChevronDown, User, Brain, FolderKanban, Briefcase } from "lucide-react";
import React from "react";
import type { MotionValue } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, y, opacity }) => (
  <motion.section
    id="hero"
    style={{ y, opacity }}
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Animated Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <motion.div
        animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-full blur-[120px] opacity-80"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-[120px] opacity-80"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-400/30 to-pink-400/30 rounded-full blur-[100px] opacity-70 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
        <div className="relative w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
            <Image
              src="/profileimage.png"
              alt="Ezequiel Diaz"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 144px) 100vw, 144px"
            />
          </div>
        </div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white mb-6">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          <Typewriter
            words={['Ezequiel Diaz']}
            loop={1}
            cursor
            cursorStyle={false}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
        <Typewriter
          words={['Full-Stack Developer 🚀🧙']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap justify-center gap-4 mb-12">
        <Badge variant="secondary" className="text-lg px-4 py-2 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">4+ años experiencia</Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col md:flex-row flex-nowrap justify-center gap-4 mb-8 py-2"
      >
        <Button
          className="w-48 min-w-[180px] cursor-pointer flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold shadow-lg transition-all duration-300"
          aria-label="Ir a Sobre mí"
          onClick={() => scrollToSection("about")}
          asChild
        >
          <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-2 w-full justify-center">
            <User className="h-5 w-5" /> Sobre mí
          </motion.span>
        </Button>
        <Button
          className="w-48 min-w-[180px]  cursor-pointer  flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold shadow-lg transition-all duration-300"
          aria-label="Ir a Skills"
          onClick={() => scrollToSection("skills")}
          asChild
        >
          <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-2 w-full justify-center">
            <Brain className="h-5 w-5" /> Skills
          </motion.span>
        </Button>
        <Button
          className="w-48 min-w-[180px] cursor-pointer flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold shadow-lg transition-all duration-300"
          aria-label="Ir a Proyectos"
          onClick={() => scrollToSection("projects")}
          asChild
        >
          <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-2 w-full justify-center">
            <FolderKanban className="h-5 w-5" /> Proyectos
          </motion.span>
        </Button>
        <Button
          className="w-48 min-w-[180px] cursor-pointer flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold shadow-lg transition-all duration-300"
          aria-label="Ir a Experiencia"
          onClick={() => scrollToSection("experience")}
          asChild
        >
          <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-2 w-full justify-center">
            <Briefcase className="h-5 w-5" /> Experiencia
          </motion.span>
        </Button>
        <Button
          className="w-48 min-w-[180px] cursor-pointer flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg font-semibold shadow-lg transition-all duration-300"
          aria-label="Ir a Contacto"
          onClick={() => scrollToSection("contact")}
          asChild
        >
          <motion.span whileTap={{ scale: 0.95 }} className="flex items-center gap-2 w-full justify-center">
            <Mail className="h-5 w-5" /> Contacto
          </motion.span>
        </Button>
      </motion.div>
    </div>
    <motion.button onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300" whileHover={{ y: 5 }} animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} aria-label="Ir a la siguiente sección">
      <ChevronDown className="h-6 w-6" />
    </motion.button>
  </motion.section>
);

export default HeroSection; 