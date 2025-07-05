import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50 backdrop-blur-sm">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Animated circles */}
          <div className="absolute inset-0 border-4 border-t-blue-500 border-r-blue-400 border-b-blue-300 border-l-blue-200 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-blue-400 border-r-blue-300 border-b-blue-200 border-l-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 border-4 border-t-blue-300 border-r-blue-200 border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-6 border-4 border-t-blue-200 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDuration: '2.5s' }}></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading</h2>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
