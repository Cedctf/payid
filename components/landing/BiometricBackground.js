import { Shield, Scan, Lock, Eye } from "lucide-react";
import BiometricShape from "./BiometricShape";
import ScanLine from "./ScanLine";
import FloatingIcon from "./FloatingIcon";
import BiometricGrid from "./BiometricGrid";
import PulseRing from "./PulseRing";

export default function BiometricBackground() {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-cyan-950/20" />
      
      {/* Grid Pattern */}
      <BiometricGrid />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <BiometricShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <BiometricShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-cyan-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <BiometricShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-indigo-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <BiometricShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-blue-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
      </div>

      {/* Scan Lines */}
      <ScanLine className="top-1/4 left-0 right-0" delay={1} />
      <ScanLine className="top-3/4 left-0 right-0" delay={1.5} />
      <ScanLine className="top-1/2 left-0 right-0" delay={2} />

      {/* Floating Security Icons */}
      <FloatingIcon
        icon={<Shield className="h-6 w-6 text-blue-400" />}
        className="top-[20%] left-[10%]"
        delay={1.2}
      />
      <FloatingIcon
        icon={<Scan className="h-6 w-6 text-cyan-400" />}
        className="top-[70%] right-[15%]"
        delay={1.4}
      />
      <FloatingIcon
        icon={<Lock className="h-6 w-6 text-indigo-400" />}
        className="bottom-[20%] left-[20%]"
        delay={1.6}
      />
      <FloatingIcon
        icon={<Eye className="h-6 w-6 text-blue-300" />}
        className="top-[15%] right-[25%]"
        delay={1.8}
      />

      {/* Pulse Rings */}
      <PulseRing
        className="top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2"
        delay={2}
        size={150}
      />
      <PulseRing
        className="bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2"
        delay={2.5}
        size={200}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/80 pointer-events-none" />
    </>
  );
} 