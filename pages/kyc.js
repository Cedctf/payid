import { motion } from "framer-motion";
import { useState } from "react";
import BiometricBackground from "../components/landing/BiometricBackground";
import PayIDHeader from "../components/PayIDHeader";
import ICUploadStep from "../components/kyc/ICUploadStep";
import FaceVerificationStep from "../components/kyc/FaceVerificationStep";

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [icFile, setIcFile] = useState(null);
  const [icPreview, setIcPreview] = useState(null);
  const [faceVerificationStatus, setFaceVerificationStatus] = useState('idle'); // idle, scanning, success, failed
  const [formData, setFormData] = useState({
    fullName: '',
    icNumber: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleICUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setIcPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startFaceVerification = () => {
    setFaceVerificationStatus('scanning');
    // Simulate face scanning process
    setTimeout(() => {
      setFaceVerificationStatus('success');
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedToStep2 = icFile && formData.fullName && formData.icNumber;
  const isRegistrationComplete = faceVerificationStatus === 'success';

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
          <div 
            className="w-12 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg shadow-lg border border-slate-700/50 relative"
            style={{
              height: 'calc(50vh + 35px)',
              marginTop: '-50vh'
            }}
          />
        </div>

        {/* Black hole */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-26 h-6 bg-black rounded-xl border border-slate-800 z-5" 
             style={{ top: 'calc(2vh + 3px)' }} />

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
          {/* Step 1: IC Upload */}
          {currentStep === 1 && (
            <ICUploadStep 
              formData={formData}
              handleInputChange={handleInputChange}
              icFile={icFile}
              icPreview={icPreview}
              handleICUpload={handleICUpload}
              nextStep={nextStep}
              canProceedToStep2={canProceedToStep2}
            />
          )}

          {/* Step 2: Face Recognition */}
          {currentStep === 2 && (
            <FaceVerificationStep 
              faceVerificationStatus={faceVerificationStatus}
              startFaceVerification={startFaceVerification}
            />
          )}
        </motion.div>

        {/* Card Shadow/Depth Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl transform translate-y-4 -z-10 blur-sm" style={{ top: '140px' }} />
      </motion.div>
    </div>
  );
}