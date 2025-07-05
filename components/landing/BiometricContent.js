import { motion } from "framer-motion";
import { Eye, Scan } from "lucide-react";

export default function BiometricContent() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative z-10 container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-8 md:mb-12"
        >
          <Eye className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-blue-300 tracking-wide">
            Biometric Security
          </span>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Secure Payment
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Face Recognition
            </span>
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base sm:text-lg md:text-xl text-blue-200/60 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
            Experience the future of secure payments with advanced biometric authentication. 
            Your face is your password.
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
            <Scan className="h-5 w-5" />
            Start Scan
          </button>
          <button className="px-8 py-3 bg-transparent border border-blue-400/30 text-blue-300 hover:bg-blue-500/10 rounded-lg font-medium transition-colors duration-200">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
} 