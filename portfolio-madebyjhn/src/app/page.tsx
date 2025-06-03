"use client";
import React from "react";
import { motion } from "framer-motion"; // Attention: `motion/react` remplacé par `framer-motion`
import { LampContainer } from "@/components/ui/lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ScrollCursor } from "@/components/ui/scrollcursor";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-950 relative">
  <LampContainer>
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-3 bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
    >
      Johan CINOSI <br /> Web Developer Portfolio
    </motion.h1>
  </LampContainer>
  <ShootingStars />
  <StarsBackground />

  <ScrollCursor className="absolute mt-[-17rem]" />
</div>

  );
}
