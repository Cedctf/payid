import { motion } from "framer-motion";
import BiometricBackground from "../components/landing/BiometricBackground";
import PayIDHeader from "../components/PayIDHeader";

export default function KYCPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030712] p-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
      
      {/* Biometric Background */}
      <BiometricBackground />
      
      {/* Glass Blur Effect Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[#030712]/20 z-30" />
      
      <PayIDHeader />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-35">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/[0.15] to-cyan-500/[0.15] rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/[0.15] to-indigo-500/[0.15] rounded-full blur-xl"
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-md z-40">
        <div className="text-center text-white">
          <h1>KYC Page - Step 2: Biometric Background & Glass Effects</h1>
        </div>
      </div>
    </div>
  );
} 