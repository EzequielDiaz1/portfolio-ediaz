import { motion } from "framer-motion";
import { User, Brain, FolderKanban, Briefcase, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "Sobre mí", icon: <User className="w-5 h-5" /> },
  { id: "skills", label: "Skills", icon: <Brain className="w-5 h-5" /> },
  { id: "projects", label: "Proyectos", icon: <FolderKanban className="w-5 h-5" /> },
  { id: "experience", label: "Experiencia", icon: <Briefcase className="w-5 h-5" /> },
  { id: "contact", label: "Contacto", icon: <Mail className="w-5 h-5" /> },
];

const sectionColors = [
  "bg-cyan-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-emerald-500",
  "bg-fuchsia-600",
];

const SidebarIndex: React.FC = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = sec.id;
          }
        }
      }
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      if (pageHeight - scrollPosition < 200) {
        current = "contact";
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="hidden lg:flex flex-col fixed top-1/2 left-6 -translate-y-1/2 z-40 gap-4"
      aria-label="Índice de secciones"
    >
      <div className="rounded-2xl bg-slate-800/80 shadow-xl border border-slate-700/40 px-3 py-4 flex flex-col gap-2 backdrop-blur-md">
        {sections.map((sec, i) => (
          <motion.button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            whileHover={{ scale: 1.08, x: 6 }}
            whileTap={{ scale: 0.97 }}
            className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer text-gray-300 font-medium text-base outline-none focus:ring-2 focus:ring-cyan-400/60 ${active === sec.id ? `${sectionColors[i]} text-white shadow-lg` : "hover:bg-slate-700/60"}`}
            aria-current={active === sec.id ? "page" : undefined}
            aria-label={`Ir a ${sec.label}`}
          >
            <span className={`transition-colors duration-300 ${active === sec.id ? "text-white" : "text-cyan-300 group-hover:text-cyan-400"}`}>{sec.icon}</span>
            <span className="hidden xl:inline transition-all duration-300">{sec.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default SidebarIndex; 