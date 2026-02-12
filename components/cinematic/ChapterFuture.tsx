"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    label: "Email",
    value: "ezequiel.diaz1337@gmail.com",
    href: "mailto:ezequiel.diaz1337@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ezequiel-diaz",
    href: "https://www.linkedin.com/in/ezequiel-diaz-4b6b0b199/",
  },
  {
    label: "GitHub",
    value: "github.com/ezequieldiaz1",
    href: "https://github.com/ezequieldiaz1",
  },
  {
    label: "Teléfono",
    value: "+54 351 201 4496",
    href: "tel:+543512014496",
  },
];

const ChapterFuture: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient light breathes
      gsap.fromTo(
        ambientRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1.4,
          opacity: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        }
      );

      // Content: zoom from black
      gsap.fromTo(
        contentRef.current,
        { scale: 0.88, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );

      // Header: clip-path reveal
      gsap.fromTo(
        headerRef.current,
        { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Contact cards: stagger from bottom
      gsap.fromTo(
        ".future-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Closing text
      gsap.fromTo(
        closingRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 90%",
            end: "top 60%",
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
      id="chapter-future"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 sm:py-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div
          ref={ambientRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[900px] sm:h-[900px] bg-white rounded-full blur-[120px] sm:blur-[200px] opacity-0"
        />
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 text-center opacity-0"
      >
        {/* Chapter header */}
        <div ref={headerRef} className="opacity-0">
          <span className="chapter-label">Chapter IV</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-4 mb-6 sm:mb-8">
            The Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
            Siempre abierto a nuevos desafíos, proyectos ambiciosos y
            colaboraciones que empujen los límites de lo digital.
          </p>
          <p className="text-sm sm:text-base text-white/25 font-light max-w-xl mx-auto leading-relaxed mb-12 sm:mb-20">
            Actualmente trabajo full time, pero también realizo proyectos
            freelance para clientes que buscan soluciones modernas y
            personalizadas.
          </p>
        </div>

        {/* Contact links */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="future-card group block p-4 sm:p-6 border border-white/8 rounded-2xl hover:border-white/15 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04] text-left opacity-0"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-white/25 font-light block mb-2">
                {link.label}
              </span>
              <span className="text-white/60 group-hover:text-white/90 transition-colors duration-300 text-sm font-light">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        {/* Closing statement */}
        <p
          ref={closingRef}
          className="mt-14 sm:mt-24 text-white/15 text-xs sm:text-sm tracking-widest uppercase font-light opacity-0"
        >
          ¿Trabajamos juntos?
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 text-center">
        <p className="text-white/10 text-xs tracking-widest uppercase font-light">
          © 2025 — Ezequiel Diaz
        </p>
      </div>
    </section>
  );
};

export default ChapterFuture;
