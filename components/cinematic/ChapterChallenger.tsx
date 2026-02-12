"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    company: "Mitrol",
    position: "Full-Stack Developer Ssr.",
    period: "Enero 2023 — Actualidad",
    location: "Buenos Aires, Argentina (remoto)",
    description:
      "Desarrollo de interfaces modernas para productos core en centros de contacto. Creación de soluciones escalables con React, Next.js y TypeScript. Colaboración directa con diseñadores y product owners para funcionalidades de alto impacto.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "WebRTC"],
  },
  {
    company: "Soho",
    position: "Full Stack Developer Jr.",
    period: "Marzo 2022 — Noviembre 2022",
    location: "Santiago, Chile (remoto)",
    description:
      "Desarrollo full-stack de aplicaciones web escalables. Arquitectura de soluciones, implementación de APIs REST y creación de interfaces responsivas con foco en experiencia de usuario.",
    tech: ["React", "TypeScript", "Next.js", "Node.js", "MongoDB"],
  },
  {
    company: "ROSS Outside the Box",
    position: "Full Stack Developer Trainee",
    period: "Septiembre 2020 — Marzo 2022",
    location: "Córdoba, Argentina",
    description:
      "Primera experiencia profesional. Desarrollo de aplicaciones completas desde cero con React, Redux y Node.js. Bases del desarrollo profesional y mejores prácticas de la industria.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "Jest"],
  },
];

const ChapterChallenger: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header: clip-path reveal + slide up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      // Timeline vertical line: draws from top to bottom as you scroll
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-entries",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );

      // Timeline entries: stagger slide-in from left with scale
      gsap.fromTo(
        ".timeline-entry",
        { opacity: 0, x: -80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".timeline-entries",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        }
      );

      // Timeline dots: pop in with glow
      gsap.fromTo(
        ".timeline-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "back.out(3)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".timeline-entries",
            start: "top 75%",
            end: "bottom 45%",
            scrub: 1.2,
          },
        }
      );

      // Tech pills per entry
      gsap.fromTo(
        ".challenger-pill",
        { opacity: 0, y: 8, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.02,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".timeline-entries",
            start: "top 70%",
            end: "bottom 35%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chapter-challenger"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter header */}
        <div ref={headerRef} className="mb-14 sm:mb-24 max-w-3xl opacity-0">
          <span className="chapter-label">Chapter III</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 mb-4 sm:mb-6">
            The Challenger
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/40 font-light leading-relaxed">
            Cada empresa fue un capítulo. Cada desafío, una evolución. De
            trainee a senior, construyendo con intención y aprendiendo sin
            pausa.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line that draws on scroll */}
          <div
            ref={timelineLineRef}
            className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/5 origin-top"
            style={{ transformOrigin: "top" }}
          />

          <div className="timeline-entries space-y-14 sm:space-y-20">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="timeline-entry relative pl-6 sm:pl-8 md:pl-20 opacity-0"
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-0 md:left-8 top-2 w-2.5 h-2.5 -translate-x-[4.5px] rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)] opacity-0" />

                {/* Period */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-white/25 font-light">
                    {exp.period}
                  </span>
                  <span className="text-xs text-white/15">{exp.location}</span>
                </div>

                {/* Company & Role */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {exp.position}
                </h3>
                <p className="text-base sm:text-lg text-white/30 mb-3 sm:mb-4 font-light">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/45 leading-relaxed mb-4 sm:mb-6 max-w-2xl font-light">
                  {exp.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="challenger-pill text-[0.65rem] sm:text-xs tracking-wider text-white/30 border border-white/8 px-2.5 py-1 sm:px-3 rounded-full opacity-0"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterChallenger;
