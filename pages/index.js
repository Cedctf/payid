import BiometricBackground from "../components/landing/BiometricBackground";
import BiometricContent from "../components/landing/BiometricContent";

export default function BiometricPaymentBackground() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Light White Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
      
      {/* PayID App Name Header */}
      <div className="absolute top-8 left-8 z-50">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
          PayID
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
      </div>
      
      <BiometricBackground />
      <BiometricContent />
    </div>
  );
}
