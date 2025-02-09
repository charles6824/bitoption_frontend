import { Carousel, Typography } from "@material-tailwind/react";
import { Stepper, Step } from "@material-tailwind/react";
import TokenInput from "../components/TokenInput";
import { Link } from "react-router-dom";
import bgUser4 from "../assets/images/btcn.jpg";
import bgUser5 from "../assets/images/bitcoin-7678812_1920.jpg";
import bgUser7 from "../assets/images/btc.jpg";
import unlock from "../assets/images/passwordReset1.jpg";
import { useResetPasswordMutation, useValidateAccountMutation, useVerifyOtpMutation } from "../slices/baseApiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { ResponseModel } from "../interface";

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateAccount,] = useValidateAccountMutation();
  const [resetPassword] = useResetPasswordMutation();
  const [verifyOtp] = useVerifyOtpMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [_isTokenComplete, setIsTokenComplete] = useState(false);
  const [token, setToken] = useState<string[]>(Array(8).fill(""));
  const [trackingCode,setTrackingCode] = useState("")
  const isLastStep = activeStep === 4;
  const isFirstStep = activeStep === 1;

  const handleTokenComplete = (isComplete: boolean, tokens: string[]) => {
    setIsTokenComplete(isComplete);
    setToken(tokens);
  };
  interface validateModel{
    email: string;
  }
  interface validateOtp{
    otp: string;
    email: string;
  }
  interface validateNewpassword{
    password: string;
    email:string,
    trackingCode: string;
  }
  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((prev) => prev - 1);
  };
  
  const handleNext = async() => {
    if (activeStep === 1) {
      if (!email) {
        toast.error("Email is required");
        return;
      }
  
      setIsLoading(true); 
      const model: validateModel = { email };
  
      try {
        const response: any = await validateAccount({ data: { payload: model } }).unwrap();
        console.log("response", response);
  
        if (response.status) {
          toast.success(response.message);
          if (!isLastStep) setActiveStep((prev) => prev + 1);
        } else {
          toast.error(response.message);
        }
      } catch (error: any) {
        console.log("Error", error);
        toast.error("Error sending email", error?.data?.message);
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  
    if (activeStep === 2) {
      if (!token.join("")) {
        toast.error("OTP is required");
        return;
      }
  
      setIsLoading(true);
      const model: validateOtp = { otp: token.join(""), email };
  
      try {
        const response = await verifyOtp({ data: { payload: model } }).unwrap() as ResponseModel;
        console.log('response',response);
  
        if (response.status) {
          setTrackingCode(response.data.trackingCode);
          toast.success(response.message);
          if (!isLastStep) setActiveStep((prev) => prev + 1);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Invalid OTP");
      } finally {
        setIsLoading(false);
      }
    }
  
    if (activeStep === 3) {
      if (!password || password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return;
      }
  
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
   
      setIsLoading(true);
      const model: validateNewpassword = { email, trackingCode, password };
  
      try {
        const response = await resetPassword({ data: { payload: model } }).unwrap() as ResponseModel;
        console.log("step3 response", response);
  
        if (response.status) {
          toast.success(response.message);
          if (!isLastStep) setActiveStep((prev) => prev + 1);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Error reseting password");
      } finally {
        setIsLoading(false);
      }
    }
  };
  


  

  return (
    <div className="flex items-center w-full h-screen bg-[#1d1d1d] gap-32">
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
        <div className="w-[40%] py-8 px-4 ">
      <Stepper
        activeStep={activeStep - 1} // Adjust for zero-based index
        lineClassName="bg-[#fa9e1f]" // Line color between steps
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {["Email", "OTP", "Reset"].map((label, index) => (
          <Step
            key={index}
            onClick={() => setActiveStep(index + 1)} // Ensure step starts from 1
            activeClassName="bg-[#fa9e1f] text-white"
            completedClassName="bg-[#fa9e1f] text-white" // Ensure previous steps stay highlighted
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

        {/* Step Content */}
        <div className="rounded-md mt-20 ">
          {activeStep === 1 && (
            <div className="">
              <p className="text-white">Enter your email address to receive a reset link.</p>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                className="mt-4 p-3 border border-gray-500 text-black rounded w-full bg-gray-50 focus:outline-none focus:border-[#fa9e1f]"
              />
            </div>
          )}

          {activeStep === 2 && (

            <div>
              <TokenInput onComplete={handleTokenComplete} hideText />
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <p className="text-white">Enter a new password for your account.</p>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password" 
                className="mt-4 p-3 border border-gray-500 rounded w-full text-black "
              />
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" 
                className="mt-4 p-3 border border-gray-500 rounded w-full text-black"
              />
              {isLoading ? (<>
              
              <button className="mt-5 py-2 px-7 rounded-md bg-[#fa9e1f] hover:bg-orange-600 transition-all"><div className="w-4 h-4 border-4 border-[#FFF] border-dotted rounded-full animate-spin mr-4"></div></button>
              </>) : (<>
                <button onClick={handleNext} className="mt-5 py-2 px-7 rounded-md bg-[#fa9e1f] hover:bg-orange-600 transition-all">submit</button>
              
              </>)}
          
            </div>
          )}

          {activeStep === 4 && (
            <div className="flex flex-col justify-center items-center">
              <img src={unlock} alt="Success" className="w-[70%] rounded-3xl" />
              <p className="text-xl font-semibold mt-4 text-white">Your password has been reset successfully!</p>
              <Link to="/sign-in" className="mt-5 py-2 px-7 rounded-md bg-[#fa9e1f] hover:bg-orange-600 transition-all">
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {activeStep < 3 && (
          <div className="mt-10 flex justify-between">
            <button onClick={handlePrev} disabled={true} className="disabled:opacity-50 bg-[#fa9e1f] py-2 rounded-md px-7">
              prev
            </button>
           {isLoading? (<>
            <button  disabled={isLastStep} className="disabled:opacity-50 bg-[#fa9e1f] py-2 px-7">
						<div className="w-4 h-4 border-4 border-[#FFF] border-dotted rounded-full animate-spin mr-4"></div>
            </button>
             
           </>) : (<>
           
            <button onClick={handleNext} disabled={isLastStep} className="disabled:opacity-50 bg-[#fa9e1f] rounded-md py-2 px-7">
             next
            </button>
           </>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;