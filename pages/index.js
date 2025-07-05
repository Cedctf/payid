import BiometricBackground from "../components/landing/BiometricBackground";
import BiometricContent from "../components/landing/BiometricContent";
import PayIDHeader from "../components/PayIDHeader";

export default function BiometricPaymentBackground() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Light White Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
      
      <PayIDHeader />
      
      <BiometricBackground />
      <BiometricContent />
    </div>
  );
}
