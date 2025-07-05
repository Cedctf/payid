import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function FloatingIcon({ icon, className, delay = 0 }) {
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
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="p-3 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
} 