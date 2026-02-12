"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useCallback } from "react";

const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/212/212.wav"
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.15;
    }

    if (isMuted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <motion.button
      onClick={toggleSound}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-white/50 hover:text-white/80 hover:border-white/20 transition-all duration-300"
      aria-label={isMuted ? "Activar sonido" : "Silenciar"}
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            animate={
              !isMuted
                ? {
                    scaleY: [0.3, 1, 0.3],
                    transition: {
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    },
                  }
                : { scaleY: 0.3 }
            }
            className="block w-[2px] h-3 bg-current origin-bottom"
          />
        ))}
      </div>
      <span className="text-xs tracking-widest uppercase font-light">
        {isMuted ? "Sound" : "On"}
      </span>
    </motion.button>
  );
};

export default SoundToggle;
