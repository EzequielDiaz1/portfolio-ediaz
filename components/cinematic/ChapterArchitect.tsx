"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import ProjectScene from "./ProjectScene";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Mr. Happy E-Commerce",
    description:
      "E-commerce personalizado para tienda especializada. Solución escalable orientada a la conversión, con arquitectura robusta y panel de administración completo.",
    tech: ["React", "Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://i.imgur.com/DvQHawt.png",
    demoUrl: "https://mrhappy-ecommerce-mmy8.vercel.app/",
    type: "E-Commerce",
  },
  {
    title: "Paddel-Club Manager",
    description:
      "Plataforma SaaS multitenant para gestión de clubes de pádel. Sistema completo de reservas, usuarios y pagos diseñado para escalar.",
    tech: ["React", "TailwindCSS", "Framer Motion", "NestJS", "PostgreSQL", "Auth0"],
    image: "https://i.imgur.com/1ejk9Dg.png",
    demoUrl: "https://mr-happy-e-commerce.vercel.app/",
    type: "SaaS Platform",
  },
];

const ChapterArchitect: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient light zoom
      gsap.fromTo(
        ambientRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1.2,
          opacity: 0.04,
          scrollTrigger: {
            trigger: introRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );

      // Content zoom-in reveal
      gsap.fromTo(
        contentRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Title clip-path reveal
      gsap.fromTo(
        titleWrapRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 65%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );

      // Subtitle fade + rise
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 55%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="chapter-architect">
      {/* Chapter intro */}
      <div
        ref={introRef}
        className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            ref={ambientRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[800px] sm:h-[800px] bg-white rounded-full blur-[120px] sm:blur-[200px] opacity-0"
          />
        </div>

        <div ref={contentRef} className="relative z-10 text-center px-5 sm:px-6 opacity-0">
          <div ref={titleWrapRef}>
            <span className="chapter-label block mb-4">Chapter II</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              The Architect
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-white/40 font-light max-w-xl mx-auto opacity-0"
          >
            Cada proyecto es una historia. Cada línea de código, una decisión
            de arquitectura.
          </p>
        </div>
      </div>

      {/* Project scenes */}
      {projects.map((project, index) => (
        <ProjectScene key={project.title} {...project} index={index} />
      ))}
    </section>
  );
};

export default ChapterArchitect;
