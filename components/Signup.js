import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CustomLink from './CustomLink';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ic, setIc] = useState('');
  const [animateIn, setAnimateIn] = useState(true);
  const [direction, setDirection] = useState('forward');

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

  return (
    <>
      <Head>
        <title>Sign Up | PayID</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-gradient p-4">
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover-scale">
            <div className="p-8">
              <div className="text-center mb-8 animate-slide-up">
                <h1 className="text-3xl font-bold text-white mb-2">Create PayID Account</h1>
                <p className="text-gray-300">Join our secure identity platform</p>
              </div>
              
              <Stepper currentStep={step} />
              
              <div className="mt-8">
                {renderStep()}
              </div>
            </div>
            
            <div className="bg-gray-900/50 px-8 py-4 border-t border-gray-700">
              <p className="text-center text-sm text-gray-400">
                Already have an account?{' '}
                <CustomLink href="/login" className="font-medium text-blue-400 hover:text-blue-300">
                  Sign in
                </CustomLink>
              </p>
            </div>
          </div>
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
      <div className="absolute top-4 left-0 w-full h-1 bg-blue-300 rounded-full overflow-hidden z-0">
        <div 
          className="h-full bg-blue-500 transition-all duration-500 ease-in-out" 
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
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md transition-all ${isCompleted ? 'bg-blue-500' : isActive ? 'bg-blue-500 step-active-animate' : 'bg-blue-300'}`}>
                {isCompleted ? '✓' : stepNumber}
              </div>
              <p className={`mt-2 text-sm ${isActive ? 'font-bold text-white' : 'text-blue-200'}`}>{step.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Step1 = ({ animateIn, fullName, setFullName, email, setEmail, password, setPassword, handleNext }) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">1. Basic info</h3>
    <p className="text-gray-300 mb-4">Please provide your full name, email, and password.</p>
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="fullName">Full Name</label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        id="fullName" 
        type="text" 
        placeholder="Full Name" 
        value={fullName} 
        onChange={(e) => setFullName(e.target.value)} 
        required 
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        id="email" 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="password">Password</label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        id="password" 
        type="password" 
        placeholder="******************" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
    </div>
    <button 
      onClick={handleNext} 
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 animate-slide-up hover:shadow-lg hover:shadow-blue-600/20"
      style={{ animationDelay: '0.4s' }}
    >
      Next
    </button>
  </div>
);

const Step2 = ({ animateIn, ic, setIc, handleNext, handlePrev, handleScanIC }) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-4">2. Identity Verification</h3>
    <p className="text-gray-300 mb-4">Please enter your Malaysian IC number. You can also use your camera to scan it.</p>
    <div className="mb-6">
      <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="ic">Malaysian IC</label>
      <input 
        className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        id="ic" 
        type="text" 
        placeholder="e.g., 900101-10-1234" 
        value={ic} 
        onChange={(e) => setIc(e.target.value)} 
        required 
      />
    </div>
    <button 
      onClick={handleScanIC} 
      className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg mb-6 border border-gray-600 transition-all duration-200 animate-slide-up"
      style={{ animationDelay: '0.2s' }}
    >
      Scan IC with Camera
    </button>
    <div className="flex justify-between">
      <button 
        onClick={handlePrev} 
        className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-200"
      >
        Back
      </button>
      <button 
        onClick={handleNext} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
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
      <p className="text-gray-300 mb-4">Please review your information before submitting.</p>
      <div className="bg-gray-700 p-6 rounded-lg mb-6 border border-gray-600 animate-slide-up hover-scale" style={{ animationDelay: '0.1s' }}>
        <p className="text-gray-300 mb-2"><span className="font-medium text-gray-200">Full Name:</span> {fullName}</p>
        <p className="text-gray-300 mb-2"><span className="font-medium text-gray-200">Email:</span> {email}</p>
        <p className="text-gray-300"><span className="font-medium text-gray-200">Malaysian IC:</span> {ic}</p>
      </div>
      <div className="flex justify-between animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button 
          onClick={handlePrev} 
          className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-200"
          disabled={isLoading}
        >
          Back
        </button>
        <button 
          onClick={handleSubmit} 
          className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/20 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
