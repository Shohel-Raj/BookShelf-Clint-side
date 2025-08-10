import React from "react";
import { motion } from "framer-motion";

const Loader = ({
  size = 12,
  color = "#34eb74",
  count = 5,
  speedMultiplier = 1,
  gap = 8,
  loading = true,
}) => {
  if (!loading) return null;

  const dot = {
    initial: { scale: 0.6, opacity: 0.6 },
    animate: (i) => ({
      scale: [0.6, 1.3, 0.9, 0.6],
      opacity: [0.6, 1, 0.8, 0.6],
      transition: {
        duration: 0.9 / speedMultiplier,
        ease: "easeInOut",
        times: [0, 0.45, 0.75, 1],
        repeat: Infinity,
        repeatType: "loop",
        delay: (i * 0.12) / speedMultiplier,
      },
    }),
  };

  const dots = Array.from({ length: count }).map((_, i) => (
    <motion.span
      key={i}
      custom={i}
      variants={dot}
      initial="initial"
      animate="animate"
      className="rounded-full inline-block"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        marginLeft: i === 0 ? 0 : gap,
        display: "inline-block",
      }}
      aria-hidden="true"
    />
  ));

  return (
    <div className="text-center min-h-screen flex justify-center items-center">
      <div
        role="status"
        aria-label="loading"
        className="flex items-center justify-center"
        style={{ lineHeight: 0 }}
      >
        {dots}
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
};

export default Loader;

