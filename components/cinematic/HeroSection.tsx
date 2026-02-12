"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const preTitleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const light1Ref = useRef<HTMLDivElement>(null);
  const light2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Intro animations (on load) ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        photoRef.current,
        { opacity: 0, scale: 0.7, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 }
      )
        .fromTo(
          preTitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          firstNameRef.current,
          { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1 },
          "-=0.5"
        )
        .fromTo(
          lastNameRef.current,
          { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1 },
          "-=0.7"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.3"
        );

      // --- Scroll-driven exit animations ---
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          pin: false,
        },
      });

      // Background zooms in
      scrollTl.to(bgRef.current, { scale: 1.3, ease: "none" }, 0);

      // Ambient lights drift
      scrollTl.to(light1Ref.current, { yPercent: -40, ease: "none" }, 0);
      scrollTl.to(light2Ref.current, { yPercent: 30, ease: "none" }, 0);

      // Content fades + rises + scales
      scrollTl.to(
        contentRef.current,
        { yPercent: -20, opacity: 0, scale: 0.88, ease: "none" },
        0
      );

      // Name split effect
      scrollTl.to(firstNameRef.current, { xPercent: -12, ease: "none" }, 0);
      scrollTl.to(lastNameRef.current, { xPercent: 12, ease: "none" }, 0);

      // Photo zooms + fades faster
      scrollTl.to(
        photoRef.current,
        { scale: 1.2, opacity: 0, filter: "blur(8px)", ease: "none" },
        0
      );

      // CTA fades out immediately
      scrollTl.to(ctaRef.current, { opacity: 0, ease: "none" }, 0);

      // Bouncing scroll indicator
      gsap.to(".scroll-line", {
        y: 6,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black will-change-transform"
      >
        <div
          ref={light1Ref}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[100px] md:blur-[150px]"
        />
        <div
          ref={light2Ref}
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-white/3 rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-5 sm:px-6 w-full max-w-5xl mx-auto will-change-transform"
      >
        {/* Profile photo */}
        <div
          ref={photoRef}
          className="mx-auto mb-6 sm:mb-8 relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-[1.5px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
              <Image
                src="/profileimage.png"
                alt="Ezequiel Diaz"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Pre-title */}
        <p
          ref={preTitleRef}
          className="chapter-label mb-4 sm:mb-6 md:mb-8 text-[0.65rem] sm:text-xs opacity-0"
        >
          Full-Stack Developer
        </p>

        {/* Main title */}
        <h1 className="text-[2.75rem] leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tighter mb-4 sm:mb-6">
          <span ref={firstNameRef} className="inline-block opacity-0">
            EZEQUIEL
          </span>
          <br />
          <span
            ref={lastNameRef}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 opacity-0"
          >
            DÍAZ
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-white/40 font-light tracking-wide max-w-md mx-auto mb-10 sm:mb-16 opacity-0"
        >
          Building Digital Experiences
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="opacity-0">
          <button
            onClick={() => {
              document.getElementById("chapter-builder")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group inline-flex flex-col items-center gap-2 sm:gap-3 text-white/30 hover:text-white/60 transition-colors duration-500 cursor-pointer"
          >
            <span className="text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase font-light">
              Scroll to Begin
            </span>
            <span className="scroll-line block w-[1px] h-6 sm:h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};

export default HeroSection;
