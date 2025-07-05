import { motion } from "framer-motion";
import PayIDHeader from "../components/PayIDHeader";

export default function KYCPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#030712] p-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
      
      <PayIDHeader />
      
      {/* Main Container - placeholder for now */}
      <div className="relative w-full max-w-md z-40">
        <div className="text-center text-white">
          <h1>KYC Page - Step 1: Basic Structure</h1>
        </div>
      </div>
    </div>
  );
} 