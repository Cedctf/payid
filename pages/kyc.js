import { motion } from "framer-motion";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import BiometricBackground from "../components/landing/BiometricBackground";
import PayIDHeader from "../components/PayIDHeader";

export default function KYCPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Main KYC Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className="relative w-full max-w-md z-40"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Long Lanyard Extension - From Top of Screen */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
          {/* Lanyard extends from top of viewport */}
          <div 
            className="w-12 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg shadow-lg border border-slate-700/50 relative"
            style={{
              height: 'calc(50vh + 35px)', // Extends from top and reaches card
              marginTop: '-50vh' // Starts from top of viewport
            }}
          >
          </div>
        </div>

        {/* Black hole - positioned independently between card and lanyard */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-26 h-6 bg-black rounded-xl border border-slate-800 z-5" 
             style={{ top: 'calc(2vh + 3px)' }}></div>

        {/* Glass Card */}
        <motion.div
          animate={{
            y: [0, 3, 0],
            rotateX: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative bg-blue-500/10 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 shadow-2xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(59, 130, 246, 0.1) 0%, 
                rgba(34, 211, 238, 0.08) 50%, 
                rgba(99, 102, 241, 0.1) 100%
              )
            `,
            boxShadow: `
              0 25px 50px -12px rgba(59, 130, 246, 0.3),
              0 0 0 1px rgba(59, 130, 246, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
            transformOrigin: "top center",
          }}
        >
          {/* Card Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-8 mt-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2">Sign up</h1>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-blue-200/80 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400/60" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@gmail.com"
                  className="w-full pl-11 pr-4 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40 backdrop-blur-sm transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-blue-200/80 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400/60" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40 backdrop-blur-sm transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400/60 hover:text-blue-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card Shadow/Depth Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl transform translate-y-4 -z-10 blur-sm" style={{ top: '140px' }} />
      </motion.div>
    </div>
  );
} 