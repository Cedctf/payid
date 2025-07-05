import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CustomLink from './CustomLink';
import Image from 'next/image';
import GradientCard from './GradientCard';

const Login = () => {
  const [ic, setIc] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log({ ic, password });
      setIsLoading(false);
      alert('Login successful!');
    }, 1500);
  };

  const handleScanIC = () => {
    // Placeholder for camera scanning functionality
    alert('Camera scanning feature coming soon!');
  };

  // Star icon for the card header
  const starIcon = (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0L9.4 5.4L14.8 5.4L10.6 8.8L12 14.2L8 10.8L4 14.2L5.4 8.8L1.2 5.4L6.6 5.4L8 0Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <GradientCard icon={starIcon}>
          <div className="text-center mb-8 animate-slide-up">
              <h1 className="text-2xl font-bold text-white mb-1">Sign in</h1>
              <p className="text-gray-300 text-sm mt-2">Access your PayID account</p>
            </div>

            <form onSubmit={handleLogin} className={`transition-opacity duration-500 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    className="w-full bg-gray-900/70 text-white border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    id="email"
                    type="email"
                    placeholder="your.email@email.com"
                    value={ic}
                    onChange={(e) => setIc(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    className="w-full bg-gray-900/70 text-white border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    id="password"
                    type="password"
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 animate-slide-up hover:shadow-lg hover:shadow-gray-700/20"
                style={{ animationDelay: '0.3s' }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : 'Login'}
              </button>
              
              <div className="mt-6 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-gray-400 text-sm">or</p>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-3 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <button
                  type="button"
                  className="flex justify-center items-center py-2 px-4 border border-gray-700/50 rounded-lg bg-gray-800/70 hover:bg-gray-700/80 transition-all duration-200"
                >
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.338-3.369-1.338-.454-1.152-1.11-1.459-1.11-1.459-.908-.619.069-.606.069-.606 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center py-2 px-4 border border-gray-700/50 rounded-lg bg-gray-800/70 hover:bg-gray-700/80 transition-all duration-200"
                >
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 8.12l-1.36.2c-.1-.24-.24-.48-.38-.7l.8-1.1c.34-.46.28-1.1-.14-1.5l-.02-.02c-.4-.4-1.04-.48-1.5-.14l-1.1.8c-.22-.14-.46-.28-.7-.38l.2-1.36c.08-.54-.28-1.06-.82-1.2h-.04c-.54-.12-1.08.2-1.2.74l-.2 1.32c-.24.02-.48.06-.72.14l-1.08-.8c-.44-.34-1.1-.28-1.5.14l-.02.02c-.4.4-.46 1.04-.12 1.48l.8 1.08c-.08.24-.14.5-.16.74l-1.34.2c-.54.08-.94.6-.82 1.14v.04c.12.54.64.92 1.18.8l1.34-.2c.1.24.24.48.38.7l-.8 1.1c-.34.46-.28 1.1.14 1.5l.02.02c.4.4 1.04.48 1.5.14l1.1-.8c.22.14.46.28.7.38l-.2 1.36c-.08.54.28 1.06.82 1.2h.04c.54.12 1.08-.2 1.2-.74l.2-1.32c.24-.02.48-.06.72-.14l1.08.8c.44.34 1.1.28 1.5-.14l.02-.02c.4-.4.46-1.04.12-1.48l-.8-1.08c.08-.24.14-.5.16-.74l1.34-.2c.54-.08.94-.6.82-1.14v-.04c-.12-.54-.64-.92-1.18-.8z"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center py-2 px-4 border border-gray-700/50 rounded-lg bg-gray-800/70 hover:bg-gray-700/80 transition-all duration-200"
                >
                  <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
              </div>
            </form>
          
          <div className="mt-6 border-t border-gray-800/50 pt-4">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-400">
                Don't have an account?{' '}
                <CustomLink href="/signup" className="font-medium text-gray-300 hover:text-white transition-all duration-200">
                  sign up
                </CustomLink>
              </p>
            </div>
          </div>
        </GradientCard>
      </div>
    </div>
  );
};

export default Login;
