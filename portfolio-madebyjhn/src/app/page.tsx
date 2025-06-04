"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ScrollCursor } from "@/components/ui/scrollcursor";
import { TextGenerateEffect } from "../components/ui/text-generate";
import { Meteors } from "../components/ui/meteors";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const words = `Salut ! Je m’appelle Johan CINOSI, diplômé d'un BAC+2 en développement Full-Stack.

Créatif dans l’âme, j’aime donner vie à des projets qui racontent une histoire et captivent ceux qui les découvrent.
Pour moi, chaque réalisation est une aventure, un moyen d’explorer, d’expérimenter et de partager ce qui me passionne.

Que ce soit par la musique, l’image, ou toute autre forme d’expression, je cherche toujours à transmettre une émotion sincère et authentique.

Je t’invite à parcourir mon univers, à découvrir ce que j’ai créé, et pourquoi pas, à échanger ensemble sur de nouvelles idées.`;

// Hook responsive simple
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function Home() {
  const controls = useAnimation();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("isMobile", isMobile);
    if (!isMobile) {
      setOpen(true);
    }
  }, [isMobile]);

  console.log("open", open);

  useEffect(() => {
    controls.start({
      scale: open ? 1 : 0.95,
      maxHeight: open ? 1000 : 64, // 64px = 4rem
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [open, controls]);

  return (
    <div className="w-full min-h-screen bg-slate-950 relative">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-3 bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Johan CINOSI <br /> Web Developer Portfolio
        </motion.h1>
      </LampContainer>

      <ShootingStars />
      <StarsBackground />
      <ScrollCursor className="absolute mt-[-12rem]" />

      <motion.div
        onClick={() => isMobile && setOpen(!open)}
        initial={false}
        animate={controls}
        className="relative w-full max-w-3xl mx-auto mt-24 cursor-pointer"
      >
        {/* Halo flou */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl scale-90" />

        {/* Carte principale */}
        <div className="relative z-10 flex flex-col rounded-3xl border border-gray-700 bg-gray-900 bg-opacity-90 p-6 sm:p-8 shadow-neu-dark overflow-hidden">
          {open == false ? (
            <div className="flex items-center justify-between text-white text-base sm:text-lg leading-relaxed">
              <span>À propos de moi</span>
              <span className="ml-2 animate-bounce">
                <FaChevronDown />
              </span>
            </div>
          ) : (
            <>
              <div className="text-white text-base sm:text-lg leading-relaxed whitespace-pre-line">
                <TextGenerateEffect
                  duration={0.2}
                  filter={true}
                  words={words}
                  className="text-white"
                />
              </div>
              <Meteors
                number={20}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
              {isMobile && (
                <div className="flex justify-end mt-4 text-gray-400 text-sm">
                  (Appuie pour refermer{" "}
                  <span className="ml-1 inline">
                    <FaChevronUp />
                  </span>
                  )
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
