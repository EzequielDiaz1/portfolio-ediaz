"use client";

import dynamic from "next/dynamic";
import GrainOverlay from "@/components/cinematic/GrainOverlay";

const CustomCursor = dynamic(
  () => import("@/components/cinematic/CustomCursor"),
  { ssr: false }
);
const ScrollProgress = dynamic(
  () => import("@/components/cinematic/ScrollProgress"),
  { ssr: false }
);
const HeroSection = dynamic(
  () => import("@/components/cinematic/HeroSection"),
  { ssr: false }
);
const ChapterBuilder = dynamic(
  () => import("@/components/cinematic/ChapterBuilder"),
  { ssr: false }
);
const ChapterArchitect = dynamic(
  () => import("@/components/cinematic/ChapterArchitect"),
  { ssr: false }
);
const ChapterChallenger = dynamic(
  () => import("@/components/cinematic/ChapterChallenger"),
  { ssr: false }
);
const ChapterFuture = dynamic(
  () => import("@/components/cinematic/ChapterFuture"),
  { ssr: false }
);

export default function PortfolioClient() {
  return (
    <div className="relative bg-[#0a0a0a]">
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />

      <HeroSection />

      {/* Cinematic fade divider */}
      <div className="h-32 sm:h-48 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <ChapterBuilder />

      <div className="h-24 sm:h-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <ChapterArchitect />

      <div className="h-24 sm:h-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <ChapterChallenger />

      <div className="h-32 sm:h-48 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <ChapterFuture />
    </div>
  );
}
