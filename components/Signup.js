import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CustomLink from './CustomLink';
import Image from 'next/image';
import GradientCard from './GradientCard';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ic, setIc] = useState('');
  const [animateIn, setAnimateIn] = useState(false);
  const [direction, setDirection] = useState('forward');

  // Trigger animation on component mount
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Handle step transitions with animation
  const handleNext = () => {
    setDirection('forward');
    setAnimateIn(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(step + 1);
      setAnimateIn(true);
    }, 300);
  };
  
  const handlePrev = () => {
    setDirection('backward');
    setAnimateIn(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(step - 1);
      setAnimateIn(true);
    }, 300);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password, ic });
    alert('Signup successful!');
  };

  const handleScanIC = () => {
    console.log('Scan IC button clicked');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 animateIn={animateIn} fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleNext={handleNext} />;
      case 2:
        return <Step2 animateIn={animateIn} ic={ic} setIc={setIc} handleNext={handleNext} handlePrev={handlePrev} handleScanIC={handleScanIC} />;
      case 3:
        return <Step3 animateIn={animateIn} fullName={fullName} email={email} ic={ic} handlePrev={handlePrev} handleSignup={handleSignup} />;
      default:
        return null;
    }
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
    <>
      <Head>
        <title>Sign Up | PayID</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-md">
          <GradientCard icon={starIcon}>
            <div className="text-center mb-8 animate-slide-up">
              <h1 className="text-3xl font-bold text-white mb-2">Create PayID Account</h1>
              <p className="text-gray-300">Join our secure identity platform</p>
            </div>
            
            <Stepper currentStep={step} />
            
            <div className="mt-8">
              {renderStep()}
            </div>
            
            <div className="mt-6 border-t border-gray-800/50 pt-4">
              <p className="text-center text-sm text-gray-400">
                Already have an account?{' '}
                <CustomLink href="/login" className="font-medium text-gray-300 hover:text-white transition-all duration-200">
                  Sign in
                </CustomLink>
              </p>
            </div>
          </GradientCard>
        </div>
      </div>
    </>
  );
};

const Stepper = ({ currentStep }) => {
  const steps = [
    { label: 'Info' },
    { label: 'Identity' },
    { label: 'Confirm' }
  ];
  
  // Calculate progress percentage based on current step
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative mb-8">
      {/* Main progress bar */}
      <div className="absolute top-4 left-0 w-full h-1 bg-gray-700/30 rounded-full overflow-hidden z-0">
        <div 
          className="h-full bg-gray-500 transition-all duration-500 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {/* Step indicators */}
      <div className="flex items-center justify-between w-full relative z-10">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md transition-all ${isCompleted ? 'bg-gray-700' : isActive ? 'bg-gray-700 step-active-animate' : 'bg-gray-800/50'}`}>
                {isCompleted ? '✓' : stepNumber}
              </div>
              <p className={`mt-2 text-sm ${isActive ? 'font-bold text-white' : 'text-gray-400'}`}>{step.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Step1 = ({ animateIn, fullName, setFullName, email, setEmail, password, setPassword, handleNext }) => (
  <div className={`transition-opacity duration-300 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
    <h3 className="text-xl font-semibold text-white mb-4">1. Basic info</h3>
    <p className="text-gray-400 mb-4">Please provide your full name, email, and password.</p>
    <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="fullName">Full Name</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <input 
          className="w-full bg-gray-900/70 text-white border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
          id="fullName" 
          type="text" 
          placeholder="Your full name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
      </div>
    </div>
    <div className="mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
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
          placeholder="your.email@example.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
    </div>
    <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="password">Password</label>
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
      onClick={handleNext} 
      className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 animate-slide-up hover:shadow-lg hover:shadow-gray-700/20"
      style={{ animationDelay: '0.4s' }}
    >
      Next
    </button>
  </div>
);

const Step2 = ({ animateIn, ic, setIc, handleNext, handlePrev, handleScanIC }) => (
  <div className={`transition-opacity duration-300 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
    <h3 className="text-xl font-semibold text-white mb-4">2. Identity Verification</h3>
    <p className="text-gray-400 mb-4">Please enter your Malaysian IC number. You can also use your camera to scan it.</p>
    <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="ic">Malaysian IC</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        </div>
        <input 
          className="w-full bg-gray-900/70 text-white border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
          id="ic" 
          type="text" 
          placeholder="e.g., 900101-10-1234" 
          value={ic} 
          onChange={(e) => setIc(e.target.value)} 
          required 
        />
      </div>
    </div>
    <button 
      onClick={handleScanIC} 
      className="w-full bg-gray-800/70 hover:bg-gray-700/80 text-white font-medium py-3 px-4 rounded-lg mb-6 border border-gray-700/50 transition-all duration-200 animate-slide-up flex items-center justify-center"
      style={{ animationDelay: '0.2s' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Scan IC with Camera
    </button>
    <div className="flex justify-between animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <button 
        onClick={handlePrev} 
        className="bg-gray-800/70 hover:bg-gray-700/80 text-white font-medium py-2 px-6 rounded-lg border border-gray-700/50 transition-all duration-200"
      >
        Back
      </button>
      <button 
        onClick={handleNext} 
        className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gray-700/20"
      >
        Next
      </button>
    </div>
  </div>
);

const Step3 = ({ animateIn, fullName, email, ic, handlePrev, handleSignup }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      handleSignup(e);
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className={`transition-opacity duration-300 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="text-xl font-semibold text-white mb-4">3. Confirmation</h3>
      <p className="text-gray-400 mb-4">Please review your information before submitting.</p>
      <div className="bg-gray-900/70 p-6 rounded-lg mb-6 border border-gray-700/50 animate-slide-up hover-scale" style={{ animationDelay: '0.1s' }}>
        <p className="text-gray-300 mb-2"><span className="font-medium text-white">Full Name:</span> {fullName}</p>
        <p className="text-gray-300 mb-2"><span className="font-medium text-white">Email:</span> {email}</p>
        <p className="text-gray-300"><span className="font-medium text-white">Malaysian IC:</span> {ic}</p>
      </div>
      <div className="flex justify-between animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button 
          onClick={handlePrev} 
          className="bg-gray-800/70 hover:bg-gray-700/80 text-white font-medium py-2 px-6 rounded-lg border border-gray-700/50 transition-all duration-200"
          disabled={isLoading}
        >
          Back
        </button>
        <button 
          onClick={handleSubmit} 
          className={`bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gray-700/20 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Signup;
