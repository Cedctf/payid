import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CustomLink from './CustomLink';

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-gradient p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover-scale">
          <div className="p-8">
            <div className="text-center mb-8 animate-slide-up">
              <h1 className="text-3xl font-bold text-white mb-2">Login to PayID</h1>
              <p className="text-gray-300">Access your secure identity</p>
            </div>

            <form onSubmit={handleLogin} className={`transition-opacity duration-500 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
              <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-gray-200 text-sm font-medium mb-2" htmlFor="ic">
                  Malaysian IC
                </label>
                <input
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  id="ic"
                  type="text"
                  placeholder="e.g., 900101-10-1234"
                  value={ic}
                  onChange={(e) => setIc(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-gray-200 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button
                  type="button"
                  onClick={handleScanIC}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg border border-gray-600 transition-all duration-200 hover:shadow-lg hover:shadow-gray-600/20"
                >
                  Scan IC with Camera
                </button>
              </div>
              
              <div className="flex items-center justify-between mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded transition-all duration-200"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-all duration-200">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 animate-slide-up hover:shadow-lg hover:shadow-blue-600/20"
                style={{ animationDelay: '0.5s' }}
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
            </form>
          </div>

          <div className="bg-gray-900/50 px-8 py-4 border-t border-gray-700">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-300">
                Don't have an account?{' '}
                <CustomLink href="/signup" className="font-medium text-blue-400 hover:text-blue-300 transition-all duration-200">
                  Sign up
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
