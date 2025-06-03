"use client";
import React from "react";
import { motion } from "framer-motion";

export const ScrollCursor = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-10 h-17 rounded-full border-2 border-white relative flex justify-center items-start">
        <motion.div
          className="w-6 h-6 bg-white rounded-full"
          animate={{
            y: [7, 32, 32, 7, 7],
            opacity: [1, 0.8, 0, 0, 1],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.5, 0.7, 0.72, 1],
          }}
        />
      </div>
    </div>
  );
};
