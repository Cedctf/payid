import Link from "next/link";

export default function PayIDHeader() {
  return (
    <div className="absolute top-8 left-8 z-50">
      <Link href="/" className="block cursor-pointer group">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-cyan-500 transition-all duration-300">
          PayID
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-cyan-400 group-hover:to-blue-400 rounded-full mt-2 transition-all duration-300"></div>
      </Link>
    </div>
  );
} 