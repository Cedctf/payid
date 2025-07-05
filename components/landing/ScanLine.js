import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function ScanLine({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent", className)}
    >
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: delay + 1,
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
      />
    </motion.div>
  );
} 