import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function PulseRing({ className, delay = 0, size = 200 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-full h-full rounded-full border-2 border-blue-400/30"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute inset-0 w-full h-full rounded-full border border-cyan-400/20"
      />
    </motion.div>
  );
} 