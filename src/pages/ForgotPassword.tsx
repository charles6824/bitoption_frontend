import { Carousel, Typography } from "@material-tailwind/react";
import { Stepper, Step } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import TokenInput from "../components/TokenInput";
import { Link } from "react-router-dom";
import bgUser4 from "../assets/images/btcn.jpg";
import bgUser5 from "../assets/images/bitcoin-7678812_1920.jpg";
import bgUser7 from "../assets/images/btc.jpg";
import unlock from "../assets/images/passwordReset1.jpg";

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTokenComplete, setIsTokenComplete] = useState(false);
  const [token, setToken] = useState<string[]>(Array(8).fill(""));
  const isLastStep = activeStep === 3;
  const isFirstStep = activeStep === 0;

  const handleTokenComplete = (isComplete: boolean, tokens: string[]) => {
    setIsTokenComplete(isComplete);
    setToken(tokens);
  };
  
  const handleNext = () => {
    if (!isLastStep) setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="flex items-center w-full h-screen bg-[#1d1d1d]">
      {/* Left Side Carousel */}
      <div className="hidden md:block h-full w-[40%]">
        <Carousel autoplay
          loop
          placeholder=""
          nextArrow={false}
          prevArrow={false}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}} 
        
        className="rounded-sm h-full">
          <img src={bgUser4} alt="image 1" className="h-full w-full object-cover" />
          <img src={bgUser5} alt="image 2" className="h-full w-full object-cover" />
          <img src={bgUser7} alt="image 3" className="h-full w-full object-cover" />
        </Carousel>
      </div>

      {/* Right Side Form */}
        {/* Stepper */}
      <div className="w-[40%] mx-auto p-5  rounded-lg  text-white">
        {activeStep < 3 && (
          <Stepper 
            activeStep={activeStep} 
            lineClassName="bg-[#fa9e1f]" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}>
            {["Email", "OTP", "Reset"].map((label, index) => (
              <Step
                key={index}
                onClick={() => setActiveStep(index)}
                activeClassName="bg-[#fa9e1f]"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {index + 1}
                <div className="absolute -bottom-8 text-center text-sm">
                  <Typography 
                    variant="h6" 
                    color="white" 
                    placeholder="" 
                    onPointerEnterCapture={() => {}} 
                    onPointerLeaveCapture={() => {}}
                  >
                    {label}
                  </Typography>
                </div>
              </Step>
            ))}
          </Stepper>
        )}

        {/* Step Content */}
        <div className="rounded-md mt-20">
          {activeStep === 0 && (
            <div className="">
              <p>Enter your email address to receive a reset link.</p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="mt-4 p-3 border border-gray-500 text-bl rounded w-full bg-gray-50 focus:outline-none focus:border-[#fa9e1f]"
              />
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <TokenInput onComplete={handleTokenComplete} hideText />
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <form>


              <p>Enter a new password for your account.</p>
              <input 
                type="password" 
                placeholder="New Password" 
                className="mt-4 p-3 border border-gray-500 rounded w-full text-black "
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="mt-4 p-3 border border-gray-500 rounded w-full text-black"
              />
              <button className="mt-5 py-2 px-7 rounded-md bg-[#fa9e1f] hover:bg-orange-600 transition-all">submit</button>
              </form>
            </div>
          )}

          {activeStep === 3 && (
            <div className="flex flex-col justify-center items-center">
              <img src={unlock} alt="Success" className="w-[70%] rounded-3xl" />
              <p className="text-xl font-semibold mt-4">Your password has been reset successfully!</p>
              <Link to="/sign-in" className="mt-5 py-2 px-7 rounded-md bg-[#fa9e1f] hover:bg-orange-600 transition-all">
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {activeStep < 2 && (
          <div className="mt-10 flex justify-between">
            <button onClick={handlePrev} disabled={isFirstStep} className="disabled:opacity-50">
              <ChevronLeft size={32} className="text-gray-300 hover:text-white" />
            </button>
            <button onClick={handleNext} disabled={isLastStep} className="disabled:opacity-50">
              <ChevronRight size={32} className="text-[#fa9e1f] hover:text-orange-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;