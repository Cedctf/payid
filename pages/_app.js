import "@/styles/globals.css";
import "@/styles/animations.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Handle route change start
    const handleStart = (url) => {
      setLoading(true);
    };

    // Handle route change complete
    const handleComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 800); // Add a small delay for smoother transitions
    };

    // Handle route change error
    const handleError = (err, url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
}
