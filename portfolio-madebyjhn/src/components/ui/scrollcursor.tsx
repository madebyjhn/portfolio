"use client";
import React from "react";
import { motion } from "framer-motion";

export const ScrollCursor = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10 h-17 rounded-full border-2 border-white relative flex justify-center items-start">
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          animate={{
            y: [
              7,   // top start visible
              32,  // descente
              32,  // pause bas
              7,   // remontée (moins instantanée)
              7    // pause haut
            ],
            opacity: [
              1,   // visible haut
              0.8,   // visible bas
              0,   // pause bas visible
              0,   // fade out rapide en remontant
              1    // fade in très rapide en haut
            ],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.5, 0.7, 0.72, 1], 
            // fade out très court (0.7 à 0.72), remontée plus longue (0.7 -> 1)
          }}
        />
      </div>
    </div>
  );
};
