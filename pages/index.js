import BiometricBackground from "../components/landing/BiometricBackground";
import BiometricContent from "../components/landing/BiometricContent";

export default function BiometricPaymentBackground() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712]">
      <BiometricBackground />
      <BiometricContent />
    </div>
  );
}
