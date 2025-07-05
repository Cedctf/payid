import { motion } from "framer-motion";
import { User, Camera, Scan, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function FaceVerificationStep({ 
  faceVerificationStatus, 
  startFaceVerification 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Header */}
      <div className="text-center mb-8 mt-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
          {faceVerificationStatus === 'success' ? (
            <User className="h-8 w-8 text-white" />
          ) : (
            <Camera className="h-8 w-8 text-white" />
          )}
        </div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2">
          {faceVerificationStatus === 'success' ? 'Verification Complete' : 'Biometric Verification'}
        </h1>
        <p className="text-blue-200/60 text-sm">
          {faceVerificationStatus === 'success' 
            ? 'Your digital identity has been successfully created' 
            : 'Please complete the facial recognition scan'
          }
        </p>
      </div>

      {/* Face Verification Interface */}
      <div className="space-y-6">
        {faceVerificationStatus === 'idle' && (
          <>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto border-2 border-dashed border-blue-400/30 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-16 w-16 text-blue-400" />
              </div>
              <p className="text-blue-200/80 text-sm mb-2">
                Position your face within the camera frame
              </p>
              <p className="text-blue-300/60 text-xs mb-6">
                Ensure good lighting and look directly at the camera
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startFaceVerification}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 flex items-center justify-center gap-2"
            >
              <Scan className="h-5 w-5" />
              Begin Facial Recognition
            </motion.button>
          </>
        )}

        {faceVerificationStatus === 'scanning' && (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto border-2 border-blue-400 rounded-full flex items-center justify-center mb-4 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-blue-400 rounded-full"
              />
              <Scan className="h-16 w-16 text-blue-400" />
            </div>
            <p className="text-blue-200/80 text-sm mb-2">
              Analyzing biometric data...
            </p>
            <p className="text-blue-300/60 text-xs">
              Please remain still during the scan
            </p>
          </div>
        )}

        {faceVerificationStatus === 'success' && (
          <>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 mx-auto border-2 border-green-400 rounded-full flex items-center justify-center mb-4 bg-green-500/10"
              >
                <CheckSquare className="h-16 w-16 text-green-400" />
              </motion.div>
              <p className="text-green-400 text-sm mb-2 font-medium">
                Identity Verification Successful
              </p>
              <p className="text-green-300/60 text-xs mb-6">
                Your secure digital identity is now active
              </p>
            </div>

            {/* Verification Details */}
            <div className="bg-green-500/5 border border-green-400/20 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-green-300 text-sm font-medium">Verification Complete</span>
              </div>
              <div className="space-y-2 text-xs text-green-200/80">
                <div className="flex justify-between">
                  <span>Identity Document:</span>
                  <span className="text-green-300">✓ Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>Biometric Match:</span>
                  <span className="text-green-300">✓ Confirmed</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Level:</span>
                  <span className="text-green-300">High</span>
                </div>
              </div>
            </div>
            
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400/50"
              >
                Access Your Dashboard
              </motion.button>
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
} 