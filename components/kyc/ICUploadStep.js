import { motion } from "framer-motion";
import { Upload, IdCard, ArrowRight } from "lucide-react";

export default function ICUploadStep({ 
  formData, 
  handleInputChange, 
  icFile, 
  icPreview, 
  handleICUpload, 
  nextStep, 
  canProceedToStep2 
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
          <IdCard className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-2">Upload IC</h1>
        <p className="text-blue-200/60 text-sm">Step 1: Identity Verification</p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-blue-200/80 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40 backdrop-blur-sm transition-all duration-200"
          />
        </div>

        {/* IC Number */}
        <div>
          <label className="block text-sm font-medium text-blue-200/80 mb-2">
            IC Number
          </label>
          <input
            type="text"
            name="icNumber"
            value={formData.icNumber}
            onChange={handleInputChange}
            placeholder="000000-00-0000"
            className="w-full px-4 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40 backdrop-blur-sm transition-all duration-200"
          />
        </div>

        {/* IC Upload */}
        <div>
          <label className="block text-sm font-medium text-blue-200/80 mb-2">
            Upload IC Photo
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleICUpload}
              className="hidden"
              id="ic-upload"
            />
            <label
              htmlFor="ic-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400/30 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 cursor-pointer transition-all duration-200"
            >
              {icPreview ? (
                <img src={icPreview} alt="IC Preview" className="h-full w-full object-cover rounded-xl" />
              ) : (
                <>
                  <Upload className="h-8 w-8 text-blue-400 mb-2" />
                  <span className="text-blue-300 text-sm">Click to upload IC</span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextStep}
          disabled={!canProceedToStep2}
          className={`w-full py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 flex items-center justify-center gap-2 ${
            canProceedToStep2 
              ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl' 
              : 'bg-gray-600 cursor-not-allowed'
          }`}
        >
          Next: Face Verification
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
} 