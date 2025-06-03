"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  // Split the text into paragraphs on line breaks
  const paragraphs = words.split(/\n+/);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15),
      }
    );
  }, [scope.current]);

  const renderParagraph = (text: string, idx: number) => {
    const wordsArray = text.split(" ");

    return (
      <p key={idx} className="mb-6 last:mb-0">
        {wordsArray.map((word, i) => (
          <motion.span
            key={word + i}
            className="dark:text-white text-black opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </p>
    );
  };

  return (
    <div
      className={cn(
        "font-semibold leading-relaxed tracking-wide",
        "text-base sm:text-lg md:text-xl",
        className
      )}
    >
      <div ref={scope}>{paragraphs.map(renderParagraph)}</div>
    </div>
  );
};