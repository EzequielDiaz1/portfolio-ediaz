"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "Django", "GraphQL"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Firebase"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Git", "Vercel", "GitHub Actions", "Railway"],
  },
  {
    label: "Ecosystem",
    items: ["TanStack Query", "Zustand", "Redux", "React Hook Form", "Auth0"],
  },
  {
    label: "Integrations",
    items: ["n8n", "Make", "Zapier", "WhatsApp API", "Socket.io"],
  },
];

const stats = [
  { value: "4+", label: "Años" },
  { value: "50+", label: "Tecnologías" },
  { value: "15+", label: "Proyectos" },
  { value: "3", label: "Empresas" },
];

const ChapterBuilder: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient light breathes with scroll
      gsap.to(ambientRef.current, {
        scale: 1.4,
        opacity: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Header: clip-path reveal + slide up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Stats: stagger from bottom with scale
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Tech categories: stagger reveal
      gsap.fromTo(
        ".tech-category",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
          },
        }
      );

      // Tech pills: stagger pop-in per category
      gsap.fromTo(
        ".tech-pill",
        { opacity: 0, scale: 0.8, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 75%",
            end: "top 25%",
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
      id="chapter-builder"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div
          ref={ambientRef}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-white rounded-full blur-[200px] opacity-0"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter header */}
        <div ref={headerRef} className="mb-12 sm:mb-20 opacity-0">
          <span className="chapter-label">Chapter I</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 mb-4 sm:mb-6">
            The Builder
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/40 font-light max-w-2xl leading-relaxed">
            +4 años construyendo experiencias digitales con las tecnologías
            más modernas del ecosistema web. Cada herramienta, elegida con
            intención.
          </p>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item text-center md:text-left opacity-0"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-white/30 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech grid */}
        <div
          ref={techRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {techCategories.map((category) => (
            <div key={category.label} className="tech-category group opacity-0">
              <h3 className="text-xs tracking-[0.3em] uppercase text-white/25 mb-5 font-light">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="tech-pill px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/50 border border-white/8 rounded-full hover:text-white/80 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 cursor-default opacity-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterBuilder;
