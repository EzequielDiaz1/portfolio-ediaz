"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, ChevronDown, Smile } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Project {
  title: string;
  description: string;
  image?: string;
  type: string;
  features: string[];
  tech: string[];
  demoUrl: string;
  repoUrl: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  scrollToSection: (sectionId: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, scrollToSection }) => (
  <section id="projects" className="py-20 px-4 bg-slate-800/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Proyectos{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            destacados
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Algunos de mis trabajos más importantes que demuestran mi experiencia en desarrollo front-end y full-stack
        </p>
      </motion.div>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
          >
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Captura de pantalla del proyecto ${project.title}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
              <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Características principales:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature: string, featureIndex: number) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300"
                    >
                      <ArrowRight className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" aria-label={`Ver demo del proyecto ${project.title}`} onClick={() => window.open(project.demoUrl, "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver demo
                </Button>
                <Tooltip.Provider delayDuration={200}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10" aria-label={`Ver código del proyecto ${project.title} en GitHub`} onClick={() => window.open(project.repoUrl, "_blank")}>
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content side="top" align="center" className="z-50 select-none rounded-lg bg-slate-900/90 px-4 py-2 text-sm text-purple-200 shadow-lg border border-purple-500/30 backdrop-blur-md">
                        Vas a tener que pedirme permiso, porqué es privado <Smile className="inline ml-1 mb-0.5 text-yellow-300" size={18} />
                        <Tooltip.Arrow className="fill-purple-500/30" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        onClick={() => scrollToSection("experience")}
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

export default ProjectsSection; 