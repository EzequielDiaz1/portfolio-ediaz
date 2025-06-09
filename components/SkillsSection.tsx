"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

type Skill = { name: string; category: string };
type SkillsCategory = {
  title: string;
  icon: string;
  skills: Skill[] | string[];
};
type SkillsData = Record<string, SkillsCategory>;

interface SkillsSectionProps {
  skillsData: SkillsData;
  scrollToSection: (sectionId: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData, scrollToSection }) => (
  <section id="skills" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          🧠 Tecnologías &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">skills</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          +4 años especializándome en desarrollo Full-Stack con tecnologías modernas
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(
          ([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-5 border transition-all duration-300 ${
                key === "frontend"
                  ? "border-cyan-500/50 ring-2 ring-cyan-500/20"
                  : key === "libraries"
                  ? "border-purple-500/50 ring-1 ring-purple-500/20"
                  : "border-slate-600/50 hover:border-cyan-500/50"
              }`}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3
                  className={`text-xl font-bold ${
                    key === "frontend"
                      ? "text-cyan-400"
                      : key === "libraries"
                      ? "text-purple-400"
                      : "text-white"
                  }`}
                >
                  {category.title}
                </h3>
                {key === "frontend" && (
                  <Badge className="ml-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs">
                    Especialidad
                  </Badge>
                )}
                {key === "libraries" && (
                  <Badge className="ml-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                    25+ librerías
                  </Badge>
                )}
              </div>
              {key === "libraries" ? (
                <div className="flex flex-wrap gap-1.5">
                  {(category.skills as string[]).map(
                    (skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.02 }}
                        whileHover={{ scale: 1.05, y: -1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-1 bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-purple-100 border-purple-400/30 hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    )
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {Object.entries(
                    (category.skills as { name: string; category: string }[]).reduce((acc, skill) => {
                      if (!acc[skill.category]) acc[skill.category] = [];
                      acc[skill.category].push(skill.name);
                      return acc;
                    }, {} as Record<string, string[]>)
                  ).map(([subCategory, skills]) => (
                    <div key={subCategory}>
                      <h4 className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                        {subCategory}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className={`text-xs px-2 py-1 transition-all duration-300 ${
                                key === "frontend"
                                  ? "bg-gradient-to-r from-cyan-600/50 to-blue-600/50 text-cyan-100 border-cyan-400/30 hover:from-cyan-500/60 hover:to-blue-500/60"
                                  : "bg-gradient-to-r from-slate-600/50 to-slate-500/50 text-gray-200 border-slate-400/30 hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/50"
                              }`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )
        )}
      </div>
      <motion.button
        onClick={() => scrollToSection("projects")}
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

export default SkillsSection; 