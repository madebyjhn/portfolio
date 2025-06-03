"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      {meteors.map((_, idx) => {
        const meteorCount = number || 20;
        const leftPercent = (idx / meteorCount) * 100;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-[meteor_5s_linear_infinite] absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']"
            )}
            style={{
              top: "-40px",
              left: `${leftPercent}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${(Math.random() * 5 + 5).toFixed(2)}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
