"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectSceneProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  type: string;
  index: number;
}

const ProjectScene: React.FC<ProjectSceneProps> = ({
  title,
  description,
  tech,
  image,
  demoUrl,
  type,
  index,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image: parallax + zoom
      gsap.fromTo(
        imageRef.current,
        { yPercent: -15, scale: 1.2 },
        {
          yPercent: 15,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      // Overlay: darker → lighter → darker
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.85 },
        {
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content: counter-parallax slide up
      gsap.fromTo(
        contentRef.current,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 10%",
            scrub: 1.2,
          },
        }
      );

      // Content exit
      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Label
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: isEven ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Title: clip-path reveal
      gsap.fromTo(
        titleRef.current,
        { clipPath: "inset(0 0 100% 0)", y: 40 },
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );

      // Description
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 15%",
            scrub: 1,
          },
        }
      );

      // Tech pills stagger
      gsap.fromTo(
        pillsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 45%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isEven]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background image with parallax + zoom */}
      <div ref={imageRef} className="absolute inset-[-15%] will-change-transform">
        <Image
          src={image}
          alt={`Proyecto ${title}`}
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-[0.85]" />

      {/* Directional gradient */}
      <div
        className={`absolute inset-0 ${
          isEven
            ? "bg-gradient-to-r from-black/80 via-black/30 to-transparent"
            : "bg-gradient-to-l from-black/80 via-black/30 to-transparent"
        }`}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 opacity-0"
      >
        <div
          className={`max-w-xl ${
            isEven ? "mr-auto" : "sm:ml-auto sm:text-right"
          }`}
        >
          <span ref={labelRef} className="chapter-label mb-4 block opacity-0">
            {type}
          </span>

          <h3
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.05] tracking-tight"
          >
            {title}
          </h3>

          <p
            ref={descRef}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed font-light opacity-0"
          >
            {description}
          </p>

          <div
            ref={pillsRef}
            className={`flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 ${
              isEven ? "" : "sm:justify-end"
            }`}
          >
            {tech.map((t) => (
              <span
                key={t}
                className="text-[0.65rem] sm:text-xs tracking-wider uppercase text-white/40 border border-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-sm opacity-0"
              >
                {t}
              </span>
            ))}
          </div>

          <div ref={ctaRef} className="opacity-0">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group ${
                isEven ? "" : "sm:flex-row-reverse"
              }`}
            >
              <span className="text-sm tracking-[0.2em] uppercase font-light">
                View Case
              </span>
              <span className="block w-8 h-[1px] bg-white/40 group-hover:bg-white group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScene;
