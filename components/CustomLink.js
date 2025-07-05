import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomLink = ({ href, children, className, onClick }) => {
  const router = useRouter();
  
  // Clean up any existing loading overlays on component mount
  useEffect(() => {
    const existingOverlay = document.getElementById('loading-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }
    
    // Set up router event listener to remove loading overlay when navigation completes
    const handleRouteComplete = () => {
      const overlay = document.getElementById('loading-overlay');
      if (overlay) {
        overlay.remove();
      }
    };
    
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, [router]);
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Remove any existing loading overlay first
    const existingOverlay = document.getElementById('loading-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }
    
    // Show loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50 backdrop-blur-sm';
    loadingOverlay.id = 'loading-overlay';
    
    const loadingContent = document.createElement('div');
    loadingContent.className = 'text-center';
    loadingContent.innerHTML = `
      <div class="relative w-20 h-20 mx-auto mb-4">
        <div class="absolute inset-0 border-4 border-t-blue-500 border-r-blue-400 border-b-blue-300 border-l-blue-200 rounded-full animate-spin"></div>
        <div class="absolute inset-2 border-4 border-t-blue-400 border-r-blue-300 border-b-blue-200 border-l-transparent rounded-full animate-spin" style="animation-duration: 1.5s"></div>
        <div class="absolute inset-4 border-4 border-t-blue-300 border-r-blue-200 border-b-transparent border-l-transparent rounded-full animate-spin" style="animation-duration: 2s; animation-direction: reverse"></div>
        <div class="absolute inset-6 border-4 border-t-blue-200 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style="animation-duration: 2.5s"></div>
      </div>
      <h2 class="text-xl font-semibold text-white mb-2">Loading</h2>
      <div class="flex justify-center space-x-1">
        <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
        <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        <div class="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
      </div>
    `;
    
    loadingOverlay.appendChild(loadingContent);
    document.body.appendChild(loadingOverlay);
    
    // If there's an onClick handler, call it
    if (onClick) {
      onClick(e);
    }
    
    // Navigate after a small delay to ensure loading is visible
    setTimeout(() => {
      router.push(href);
      
      // Set a safety timeout to remove the overlay if navigation takes too long
      setTimeout(() => {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
          overlay.remove();
        }
      }, 3000); // Safety timeout of 3 seconds
    }, 100);
  };
  
  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
