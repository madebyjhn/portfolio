"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ScrollCursor } from "@/components/ui/scrollcursor";
import { TextGenerateEffect } from "../components/ui/text-generate";
import { Meteors } from "../components/ui/meteors";

const words = `Salut ! Je m’appelle Johan CINOSI, diplômé d'un BAC+2 en développement Full-Stack.

Créatif dans l’âme, j’aime donner vie à des projets qui racontent une histoire et captivent ceux qui les découvrent.
Pour moi, chaque réalisation est une aventure, un moyen d’explorer, d’expérimenter et de partager ce qui me passionne.

Que ce soit par la musique, l’image, ou toute autre forme d’expression, je cherche toujours à transmettre une émotion sincère et authentique.

Je t’invite à parcourir mon univers, à découvrir ce que j’ai créé, et pourquoi pas, à échanger ensemble sur de nouvelles idées.`;

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

      <ScrollCursor className="absolute mt-[-12rem]" />

      <div className="relative w-full max-w-3xl mx-auto mt-22">
        {/* Halo flou dégradé derrière la carte */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl scale-90" />

        {/* Carte principale */}
        <div className="relative z-10 flex flex-col rounded-3xl border border-gray-700 bg-gray-900 bg-opacity-90 p-8 min-h-[20rem] shadow-neu-dark overflow-hidden">
          <div className="text-white text-base sm:text-lg leading-relaxed whitespace-pre-line">
            <TextGenerateEffect duration={0.2} filter={true} words={words} />
          </div>

          {/* Meteors placés à l’intérieur, en absolute, taille carte */}
          <Meteors
            number={20}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
