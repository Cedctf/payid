import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex items-center justify-center min-h-screen`}
    >
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to PayID</h1>
        <p className="text-lg text-gray-600 text-center">Your secure and easy way to manage your identity.</p>
        <div className="flex gap-4">
          <a href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </a>
          <a href="/login" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Login
          </a>
        </div>
      </main>
    </div>
  );
}
